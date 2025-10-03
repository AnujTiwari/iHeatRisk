import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer"; 
import { ZodError } from "zod";


export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // ✅ Validate request body
      const validatedData = contactMessageSchema.parse(req.body);

      // ✅ Save to storage (optional logging or DB)
      const savedMessage = await storage.saveContactMessage(validatedData);

      // ✅ Send Email using Nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "info@iheatrisk.com",       
          pass: "dcay uwwo tnlr tjpx",           
        },
      });

      await transporter.sendMail({
        from: `"iHEATRISK Contact" <your-email@gmail.com>`,
        to: "your-email@gmail.com",
        subject: `[iHEATRISK] ${validatedData.subject}`,
        html: `
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong><br>${validatedData.message}</p>
        `,
      });

      // ✅ Respond to frontend
      res.status(200).json({
        success: true,
        message: "Message saved and email sent successfully!",
        id: savedMessage.id,
      });

    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message,
        });
      } else {
        console.error("Unhandled error in /api/contact:", error); // ✅ Add this
        res.status(500).json({
          success: false,
          message: "An unknown error occurred",
          error: error instanceof Error ? error.message : "Unknown",
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// pages/api/contact.js
import dbConnect from '../../lib/dbConnect';
import Contact from '../../models/Contact';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Simple validation
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Create a new contact document
      const contact = new Contact({ name, email, message,subject });
      await contact.save();
      if(!contact){
        return res.status(400).json({ error: 'Error saving contact' });
      }

      return res.status(200).json({ success: true, message: 'Message saved successfully',data:contact });
    } catch (error) {
      console.error('Error saving contact:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

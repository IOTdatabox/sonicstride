// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/utils/supabaseClient';

interface Data {
  message?: string;
  error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log("❤️", req.body);
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Invalid email' });
    }

    try {
      const { error } = await supabase.from('subscribers').insert([{ email }]);
      if (error) throw error;

      res.status(200).json({ message: 'Subscribed successfully!' });
    } catch (error: unknown) {
      console.error('Failed to save email:', error); // Utilize the error variable
      res.status(500).json({ error: 'Failed to save email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
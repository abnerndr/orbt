// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const body = JSON.parse(req.body)
	console.log('body', body)

	const message = `
	Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
	`

	mail.send({
		to: 'suporte@orbt.com.br',
		from: 'suporte@orbt.com.br',
		subject: 'New Message!',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	})
}

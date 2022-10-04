//send message to email useing sendgrid

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const { name, email, message } = req.body;
    
    const content = {
        to: 'psingh5025615@gmail.com',
        from: email,
        subject: `New message from ${name}`,
        text: message,
        html: `<p>${message}</p>`,
    };

    try {
        await sgMail.send(content);
        return res.status(200).json({
            status: 'success',
        });
    }
    catch (err) {
        return res.status(400).json({
            status: 'fail',
        });
    }
};

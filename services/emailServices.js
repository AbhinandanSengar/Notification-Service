const sendEmail = async (to, body) => {
    console.log(`Sending email to ${to}: ${body}`);
    return Promise.resolve();
}

module.exports = sendEmail
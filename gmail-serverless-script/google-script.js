function doPost(e) {
  let data = {};

  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    data = e.parameter;
  }

  const subject = "Website Enquery Details from " + data.firstname;

  const html =
    "<b>First Name:</b> " + (data.firstname || "") + "<br>" +
    "<b>Last Name:</b> " + (data.lastname || "") + "<br>" +
    "<b>Email:</b> " + (data.email || "") + "<br>" +
    "<b>Phone:</b> " + (data.phone || "") + "<br>" +
    "<b>Message:</b> " + (data.message || "") + "<br><br>" +
    "---------<br>Sent from your website contact form";

  try {
    MailApp.sendEmail({
      to: "kian@bngeospatial.com",
      subject: subject,
      htmlBody: html
    });

    // ✅ success response (only "success")
    return ContentService.createTextOutput("success");

  } catch (error) {
    // ❌ failed response (only "failed")
    return ContentService.createTextOutput("failed");
  }
}

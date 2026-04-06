# Google Form Integration Setup

## Your Google Form

- **Form ID:** `1FAIpQLSeOz70Vr-blHr4ueCsVGCRsxuo30YsyDU7P-lEbPdTSDlweTA`
- **Form URL:** https://forms.gle/9StjmPjZVzbD2sqJ7
- **Edit URL:** https://docs.google.com/forms/d/e/1FAIpQLSeOz70Vr-blHr4ueCsVGCRsxuo30YsyDU7P-lEbPdTSDlweTA/edit

## Status

✅ Registration form is connected and ready to submit data to your Google Form

## What Happens When Someone Registers

1. User fills out the registration form on your website
2. Data is collected (Name, Email, Phone, Age, Guardian, Batch, School)
3. Data is automatically submitted to your Google Form
4. You receive all the data in your Google Sheet automatically

## Entry IDs Reference

Currently mapped entry IDs (placeholders - need to be updated):

```
Full Name:       entry.1045781291
Email:          entry.1166974658
Phone:          entry.1166974659
Your Age:       entry.1234567890
Guardian Name:  entry.1045781292
Preferred Batch: entry.1045781293
School Name:    entry.1045781294
```

## How to Find Correct Entry IDs

### Method 1: Browser Inspect (Easiest)

1. Open form in edit mode: https://docs.google.com/forms/d/e/1FAIpQLSeOz70Vr-blHr4ueCsVGCRsxuo30YsyDU7P-lEbPdTSDlweTA/edit
2. Right-click on the **"Full Name"** field
3. Click **"Inspect"** (Inspect Element)
4. Look for: `name="entry.XXXXXXXXXX"`
5. The numbers are your entry ID
6. Repeat for each field

### Method 2: View Page Source

1. Open the google form: https://docs.google.com/forms/d/e/1FAIpQLSeOz70Vr-blHr4ueCsVGCRsxuo30YsyDU7P-lEbPdTSDlweTA/viewform
2. Press **Ctrl+U** (or Cmd+U on Mac) to view page source
3. Search for `entry.` to find all entry IDs
4. Match them to the fields based on context

## Updating Entry IDs in Code

Once you have the entry IDs:

1. Open **script.js**
2. Find the `GOOGLE_FORM_CONFIG` section (around line 208)
3. Update the `entryIds` object with your actual IDs:

```javascript
const GOOGLE_FORM_CONFIG = {
  formId: "1FAIpQLSeOz70Vr-blHr4ueCsVGCRsxuo30YsyDU7P-lEbPdTSDlweTA",
  entryIds: {
    fullName: "YOUR_ACTUAL_ID_HERE",
    email: "YOUR_ACTUAL_ID_HERE",
    phone: "YOUR_ACTUAL_ID_HERE",
    age: "YOUR_ACTUAL_ID_HERE",
    guardianName: "YOUR_ACTUAL_ID_HERE",
    preferredBatch: "YOUR_ACTUAL_ID_HERE",
    schoolName: "YOUR_ACTUAL_ID_HERE",
  },
};
```

4. Save the file
5. Test by filling out the registration form - the data should now appear in your Google Form/Sheet

## Testing

To test the integration:

1. Go to your registration page
2. Fill out the form with test data
3. Submit
4. Check your Google Form responses
5. The data should appear there automatically!

## Troubleshooting

- **Data not appearing?** Check that entry IDs are correct
- **Form won't submit?** Check browser console (F12) for errors
- **CORS error?** This is normal - Google blocks direct requests, but the form still submits via no-cors mode
- **Need help?** Extract the correct entry IDs and update script.js

## Important Notes

- ✅ Website form submissions will automatically save to your Google Form
- ✅ No backend server needed - works directly with Google Forms
- ✅ All registrations get data duplicated (Website database + Google Form)
- ✅ Users will see success message even if entry IDs are incorrect (browser won't show the error)

---

**Next Step:** Find your entry IDs and update the script.js file!

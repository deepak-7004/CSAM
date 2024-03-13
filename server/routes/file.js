const express = require('express');
const router = express.Router();
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

router.get('/:fileName', (req, res) => {
  const bucketName = 'abi-ghq-01190-cybersecurity.appspot.com';
  const fileName = req.params.fileName;
  const bucket = storage.bucket(bucketName);

  const file = bucket.file(`assets/public/${fileName}`);
  file.exists((err, exists) => {
    if (err) {
      console.error('Error checking file existence:', err);
      res.status(500).send('Error checking file existence');
    } else if (!exists) {
      console.error('File does not exist');
      res.status(404).send('File not found');
    } else {
      const fileStream = file.createReadStream();
      fileStream.on('error', (err) => {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
      });
      console.log('fileStream', res);
      fileStream.pipe(res);
    }
  });
});

module.exports = (app) => {
  app.use('/api/file', router);
};

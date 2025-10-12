const prisma = require('../PrismaClient');

exports.getPhotos = async (req, res) => {
  try {
    const photos = await prisma.progressPhoto.findMany();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addPhoto = async (req, res) => {
  try {
    const { fileUri, note } = req.body;
    const photo = await prisma.progressPhoto.create({
      data: { fileUri, note }
    });
    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


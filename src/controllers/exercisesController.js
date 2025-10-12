const prisma = require('../PrismaClient');

exports.getExercises = async (req, res) => {
  try {
    const data = await prisma.exerciseCatalog.findMany();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createExercise = async (req, res) => {
  try {
    const { name, muscleGroup, notes } = req.body;
    const exercise = await prisma.exerciseCatalog.create({ data: { name, muscleGroup, notes } });
    res.status(201).json(exercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


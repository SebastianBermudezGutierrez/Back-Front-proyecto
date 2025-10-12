const prisma = require('../PrismaClient');

exports.getSessions = async (req, res) => {
  try {
    const sessions = await prisma.workoutSession.findMany({
      include: { sets: true }
    });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSession = async (req, res) => {
  try {
    const { sessionDate, notes, sets } = req.body;
    const session = await prisma.workoutSession.create({
      data: {
        sessionDate: new Date(sessionDate),
        notes,
        sets: {
          create: sets
        }
      },
      include: { sets: true }
    });
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


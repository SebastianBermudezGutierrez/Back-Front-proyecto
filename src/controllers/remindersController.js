const prisma = require('../PrismaClient');

exports.getReminders = async (req, res) => {
  try {
    const reminders = await prisma.reminder.findMany();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createReminder = async (req, res) => {
  try {
    const { daysMask, hour, minute, enabled } = req.body;
    const reminder = await prisma.reminder.create({
      data: { daysMask, hour, minute, enabled }
    });
    res.status(201).json(reminder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const reminder = await prisma.reminder.update({
      where: { id: parseInt(id) },
      data: req.body
    });
    res.json(reminder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.reminder.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Recordatorio eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

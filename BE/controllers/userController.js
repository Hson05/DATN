const User = require('../models/User');

// Lấy tất cả user
exports.getAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Tạo user mới
exports.create = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};

// Cập nhật user
exports.update = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
};

// Xóa user
exports.remove = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};

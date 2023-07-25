const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({ include: [ Product ] });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, { include: [ Product ] });
    if (!categoryData)
      return res.status(404).json({ message: `No category found with ID: ${req.params.id}!` });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const catData = await Category.update(req.body, {
      where: { id: req.params.id }
    });
    if (!catData[0])
      return res.status(404).json({ message: `No category found with ID: ${req.params.id}!` });

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const catData = await Category.destroy({
      where: { id: req.params.id }
    });
    if (!catData)
      return res.status(404).json({ message: `No category found with ID: ${req.params.id}!` });

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
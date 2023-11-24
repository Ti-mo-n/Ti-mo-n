const router = require("express").Router();
const Hostel = require("../models/hostel"); //import hostel model

router.get("/hostels", async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    let sort = req.query.sort || "buildingName";

    const typeOptions = ["self-contained", "non self-contained"];
    const capacityOptions = ["single", "double", "triple"];

    req.query.type
      ? (type = req.query.type.split(","))
      : (type = [...typeOptions]);

    req.query.capacity
      ? (capacity = req.query.capacity.split(","))
      : (capacity = [...capacityOptions]);

    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    }

    const hostels = await Hostel.find({
      buildingName: { $regex: search, $options: "i" },
      "rooms.type": { $in: type },
      "rooms.capacity": { $in: capacity },
    })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await Hostel.countDocuments({
      buildingName: { $regex: search, $options: "i" },
      "rooms.type": { $in: type },
      "rooms.capacity": { $in: capacity },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      types: typeOptions,
      capacities: capacityOptions,
      hostels,
    };

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
});

module.exports = router;

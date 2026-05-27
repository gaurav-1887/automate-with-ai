const Lead = require("../models/Lead");


// CREATE LEAD

exports.createLead = async (req, res) => {

  try {

    const {

      name,
      email,
      message

    } = req.body;

    // VALIDATION

    if (!name || !email || !message) {

      return res.status(400).json({

        success: false,
        message: "All fields are required"

      });

    }

    // SAVE LEAD

    const lead = await Lead.create({

      name,
      email,
      message

    });

    res.status(201).json({

      success: true,
      message: "Lead stored successfully",
      lead

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message: "Server Error"

    });

  }

};


// GET ALL LEADS

exports.getAllLeads = async (req, res) => {

  try {

    const leads = await Lead.find()

    .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,

      count: leads.length,

      leads

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message: "Server Error"

    });

  }

};

// DELETE LEAD

exports.deleteLead = async (req, res) => {

  try {

    const lead = await Lead.findByIdAndDelete(

      req.params.id

    );

    if (!lead) {

      return res.status(404).json({

        success: false,
        message: "Lead not found"

      });

    }

    res.status(200).json({

      success: true,
      message: "Lead deleted successfully"

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message: "Server Error"

    });

  }

};
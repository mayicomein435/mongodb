//question 1
db.tasks.aggregate([
  {
    $match: {
      due_date: {
        $gte: ISODate('2020-10-01'),
        $lte: ISODate('2020-10-31')
      }
    }
  }
])
db.topics.aggregate([
  {
    $match: {
      due_date: {
        $gte: ISODate('2020-10-01'),
        $lte: ISODate('2020-10-31')
      }
    }
  }
])

  //question 2
  db.company_drives.find({
    driveDate: {
      $gte: ISODate("2023-10-15T00:00:00Z"),
      $lte: ISODate("2023-10-31T23:59:59Z")
    }
  }, {
    companyName: 1, 
    _id: 0          
  }).pretty();

  //question 3
  db.company_drives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "eligible_courses",
        foreignField: "course",
        as: "eligible_students"
      }
    },
    {
      $project: {
        company_name: 1,
        date_of_arrival: 1,
        job_positions: 1,
        location: 1,
        eligible_students: {
          user_id: 1,
          name: 1,
          email: 1,
          course: 1
        }
      }
    }
  ]).pretty()

  //question4
  db.codekata.aggregate([
    {
      $match: { "name": "Alice Johnson" } 
    },
    {
      $project: {
        "total_problems_solved": {
          $sum: [
            "$problems_solved.basic",
            "$problems_solved.string",
            "$problems_solved.array",
            "$problems_solved.numbers"
          ]
        }
      }
    }
  ])
  //question 5
  db.mentors.find({ student_count: { $gt: 15 } })

  
  
  

  
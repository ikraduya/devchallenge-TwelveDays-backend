const Talent = require('../models/Talent');

/**
  * GET api/talent/talents
  * req.query:
*/
exports.getAllTalent = (req, res) => {
  const talentQuery = Talent
    .find({})

  Promise.resolve(talentQuery)
    .then((talentList) => {
      let counter = []
      let keys = []
      talentList.map((talent, index) => {
          if (keys.indexOf(talent.role) == -1){
            keys.push(talent.role)
            counter[talent.role] = {} 
            if (talent.status == "Vacant"){
              counter[talent.role]["Vacant"] = 1;
              counter[talent.role]["Floating"] = 0;
            } else {
              counter[talent.role]["Vacant"] = 0;
              counter[talent.role]["Floating"] = 1;
            }
          } else {
            counter[talent.role][talent.status]++;
          }
      })

      let talents = []
      keys.map((key,index) => {
        talents.push({
          role: key,
          number: {
            vacant: counter[key]["Vacant"],
            floating: counter[key]["Floating"]
          }
        })
      })

      return res.json({
        status: 'success',
        message: 'Get all talent success',
        data: talents,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        status: 'error',
        message: 'Error while querying database',
      });
    });
};

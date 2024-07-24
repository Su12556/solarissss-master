
/* const addressGridHandler = (req, res) => {
    console.log('addressGrid route hit');
    res.json({ message: 'addressGrid route hit' });
  }; */
  
  const addressViewHandler = (req, res) => {
    console.log('addressView route hit');
    res.json({ message: 'addressView route hit' });
  };
  
  const addressEditHandler = (req, res) => {
    console.log('addressEdit route hit');
    res.json({ message: 'addressEdit route hit' });
  };
  
  module.exports = {
    addressGridHandler,
    addressViewHandler,
    addressEditHandler
  };
  
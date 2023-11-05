const getData = async (setInserimentiForm) => {
    const ret = await fetch("http://localhost:5000/posts");
    const data = await ret.json();

    console.log(data);
    setInserimentiForm(data);
  };


  export default getData;
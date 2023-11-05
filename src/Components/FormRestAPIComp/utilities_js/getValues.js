const getValues = (e, setInserimentoForm, inserimentoForm) => {
    var name = e.target.name;
    var value = e.target.value;

    setInserimentoForm({
      ...inserimentoForm,
      id: new Date().getTime().toString(),
      [name]: value,
    });
  };

export default getValues;
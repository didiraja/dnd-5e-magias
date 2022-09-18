const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};


  const fetchData = async () => {
    dispatch({ type: 'FETCH_INIT' });

    try {
      const result = await axios(config);

      if (!didCancel) {
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      }
    } catch (error) {
      if (!didCancel) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    }
  };


    // const filter = {};

  // const atlasID = {
  //   dataSource: "personal-app",
  //   database: "DeD5e",
  //   collection: "spells",
  //   limit: 20,
  //   filter,
  // };
    
  // const requestConfig = {
  //   method: "post",
  //   url: "https://us-east-1.aws.data.mongodb-api.com/app/data-njmii/endpoint/data/v1/action/find",
  //   headers: {
  //     "Content-Type": "application/json",
  //     // "Access-Control-Request-Headers": "*",
  //     "api-key":
  //     "xaab4t4xmxJrAaHSPaoOJiz4rIPqFnW3XKKwhwb4nksPEAQwvPVQuTaZreSbEvfi",
  //   },
  //   data: atlasID,
  // };

  // useEffect(() => {

  //   const fetch = async () => axios(requestConfig)
  //     .then((res) => {
  //       const data = res.data.documents;

  //       setSpells(data);
  //     })
  //     .catch((e) => console.log(e));

  //   fetch();

  // }, []);
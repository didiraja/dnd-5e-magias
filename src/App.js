import React, { useState, useEffect, useReducer, } from "react";
import logo from "./logo.svg";
import "./App.scss";
import axios from "axios";

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

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(url);

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};


const App = () => {

  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );

  // const data = {
  //   dataSource: "personal-app",
  //   database: "app",
  //   collection: "spell-list",
  //   filter: {}
  // };

  // const config = {
  //   method: "post",
  //   url: "https://us-east-1.aws.data.mongodb-api.com/app/data-njmii/endpoint/data/v1/action/find",
  //   headers: {
  //     "Content-Type": "application/json",
  //     // "Access-Control-Request-Headers": "*",
  //     "api-key":
  //     "xaab4t4xmxJrAaHSPaoOJiz4rIPqFnW3XKKwhwb4nksPEAQwvPVQuTaZreSbEvfi",
  //   },
  //   data: data,
  // };

	// axios(config)
	// 	.then((response) => {
	// 		useSpells(response.data.documents)
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

			{/* {
				spells.map((spell, index) => {

					

				})
			} */}
    </div>
  );
}

export default App;

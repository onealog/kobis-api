const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchData = async () => {
  const KOBIS_URL = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=20120101`;

  try {
    const response = await fetch(KOBIS_URL);

    if (response.ok) {
      const data = await response.json();

      return data;
    }

    throw Error('리스트를 불러올 수 없습니다. 잠시 후에 다시 시도해주세요.');
  } catch (err) {
    throw Error('리스트를 불러올 수 없습니다. 잠시 후에 다시 시도해주세요.');
  }
};

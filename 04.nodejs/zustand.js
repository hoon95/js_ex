import {create} from 'zustand';
import {favoriteCoinAPI} from '../api/favoriteCoin';

const useCoinStore = create(set => ({
  coinList: [], //코인 정보 리스트
  favoriteCoinList: [],
  isLoadingFavoriteCoinList: false, //로딩 상태

  setCoinList: coinList => set({coinList}),
  clearCoinList: () => set({coinList: []}),

  setFavoriteCoinList: favoriteCoinList => set({favoriteCoinList}),
  clearFavoriteCoinList: () => set({favoriteCoinList: []}),
  
  /* 관심코인 리스트 가져오기 메서드 */
  getFavoriteCoinList: memberId => {
    set({isLoadingFavoriteCoinList: true}); //이런 식으로 전역 로딩도 설정 가능해요
    favoriteCoinAPI
      .getFavoriteCoinList(memberId)
      .then(result => {
        set({favoriteCoinList: result.data}); //데이터 형식은 return값에 따라 변경
      })
      .catch(e => {
        console.error('Get Favorite Coin List Error:', e);
      })
      .finally(() => {
        set({isLoadingFavoriteCoinList: false}); //로딩 꺼주시고
      });
  },
}));

export default useCoinStore;
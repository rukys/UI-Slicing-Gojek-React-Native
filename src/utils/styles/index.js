import {StyleSheet} from 'react-native';
import {colors} from '../colors';
// import {fonts} from '../fonts';

export const styles = StyleSheet.create({
  pageSplash: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  logoGojek: {
    alignSelf: 'center',
    marginBottom: 48,
  },
  containerGoto: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 100,
  },
  textGoto: {
    alignSelf: 'center',
    fontWeight: '400',
    color: colors.black,
  },
  logoGoto: {
    height: 45,
    width: 60,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  containerTopTab: {
    paddingTop: 30,
    backgroundColor: colors.green2,
  },
  tab: {
    height: 50,
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.green1,
    padding: 6,
  },
  itemFillTab: {
    flex: 1,
    padding: 8,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  itemNotFillTab: {
    flex: 1,
    padding: 8,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green1,
  },
  textFillTab: {
    fontSize: 13,
    color: colors.green1,
    fontWeight: 'bold',
  },
  textNotFillTab: {
    fontSize: 13,
    color: colors.white,
    fontWeight: 'bold',
  },
  content: {
    marginHorizontal: 16,
  },
  containerSearch: {
    flex: 1,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.grey1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: colors.dark3,
  },
  containerAvatar: {},
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  pinAvatar: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  containerGopay: {
    height: 100,
    backgroundColor: colors.blue1,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  dashGrey: {
    width: 3,
    height: 12,
    borderRadius: 100,
    backgroundColor: colors.dark3,
  },
  dashWhite: {
    width: 3,
    height: 12,
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  topCardGopay: {
    width: 115,
    height: 12,
    marginLeft: 8,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: colors.blue4,
  },
  cardGopay: {
    height: 68,
    width: 130,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 8,
  },
  scrolGopay: {
    width: 50,
    paddingBottom: 32,
  },
  numberGopay: {
    fontWeight: 'bold',
    color: colors.black,
  },
  historyGopay: {
    color: colors.green2,
    fontWeight: 'bold',
    fontSize: 12,
  },
  containerIconGopay: {
    width: 160,
    flexDirection: 'row',
    marginRight: 16,
    justifyContent: 'space-between',
  },
  iconGopay: {
    marginRight: -8,
    alignItems: 'center',
  },
  textGopay: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.white,
  },

  containerMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingLeft: 2,
  },
  menu: {
    width: 81,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 40,
  },
  labelMenu: {
    fontSize: 13,
    fontWeight: '300',
    color: colors.black,
  },
  containerGoclub: {
    height: 65,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  dots: {
    position: 'absolute',
    left: 10,
  },
  goClub: {
    flex: 1,
  },
  textGoClub: {
    color: colors.black,
    fontWeight: 'bold',
  },
  containerBar: {
    height: 5,
    backgroundColor: colors.grey,
    borderRadius: 5,
  },
  bar: {
    height: 5,
    backgroundColor: colors.green2,
    borderRadius: 5,
    width: '70%',
  },
  progressGoclub: {
    height: 5,
    borderRadius: 20,
    backgroundColor: colors.grey,
  },
  titleAksesCepat: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
  },
  containerAksescepat: {
    height: 110,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: colors.grey,
    paddingHorizontal: 16,
    paddingVertical: 5,
    justifyContent: 'space-around',
  },
  textAksesCepat: {
    flex: 1,
    fontWeight: '400',
    color: colors.black,
    alignSelf: 'center',
  },
  titleGpaylater: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  textGpaylater: {
    fontWeight: '300',
    color: colors.black,
  },
  cardPromotion: {
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: colors.grey,
  },
  imgPromotion: {
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  contentPromotion: {
    padding: 16,
  },
  titlePromotion: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
  },
  textPromotion: {
    fontWeight: '300',
    color: colors.black,
  },
});

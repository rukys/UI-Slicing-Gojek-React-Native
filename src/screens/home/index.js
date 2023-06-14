import {
  Animated,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, styles} from '../../utils';
import {Gap} from '../../components';
import {
  IconArrow,
  IconBayar,
  IconDots,
  IconEksplor,
  IconEmoji,
  IconEmoji1,
  IconGocar,
  IconGoclub,
  IconGofood,
  IconGomart,
  IconGomore,
  IconGopaylater,
  IconGopulsa,
  IconGoride,
  IconGosend,
  IconPinAvatar,
  IconSearch,
  IconStar,
  IconTopup,
  ImgAvatar,
  ImgGopay,
  ImgPromotion1,
  ImgPromotion2,
  ImgPromotion3,
} from '../../assets';

export default function HomeScreen() {
  const [tab, setTab] = useState(0);

  const menu = [
    {image: IconGoride, label: 'GoRide'},
    {image: IconGocar, label: 'GoCar'},
    {image: IconGofood, label: 'GoFood'},
    {image: IconGosend, label: 'GoSend'},
    {image: IconGomart, label: 'GoMart'},
    {image: IconGopulsa, label: 'GoPulsa'},
    {image: IconGoclub, label: 'GoClub'},
    {image: IconGomore, label: 'Lainnya'},
  ];

  return (
    <View style={styles.page}>
      <View style={styles.containerTopTab}>
        <View style={styles.tab}>
          <TouchableOpacity
            style={tab === 0 ? styles.itemFillTab : styles.itemNotFillTab}
            onPress={() => setTab(0)}>
            <Text
              style={tab === 0 ? styles.textFillTab : styles.textNotFillTab}>
              Beranda
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tab === 1 ? styles.itemFillTab : styles.itemNotFillTab}
            onPress={() => setTab(1)}>
            <Text
              style={tab === 1 ? styles.textFillTab : styles.textNotFillTab}>
              Promo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tab === 2 ? styles.itemFillTab : styles.itemNotFillTab}
            onPress={() => setTab(2)}>
            <Text
              style={tab === 2 ? styles.textFillTab : styles.textNotFillTab}>
              Pesanan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tab === 3 ? styles.itemFillTab : styles.itemNotFillTab}
            onPress={() => setTab(3)}>
            <Text
              style={tab === 3 ? styles.textFillTab : styles.textNotFillTab}>
              Chat
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Gap height={24} />
        <View style={styles.flexRow}>
          <View style={styles.containerSearch}>
            <Gap width={16} />
            <IconSearch />
            <Gap width={8} />
            <TextInput
              placeholder="Cari layanan, makanan, & tujuan"
              placeholderTextColor={colors.dark3}
            />
          </View>
          <Gap width={16} />
          <TouchableOpacity>
            <Image
              source={ImgAvatar}
              style={styles.avatar}
              resizeMode="contain"
            />
            <IconPinAvatar style={styles.pinAvatar} />
          </TouchableOpacity>
        </View>
        <Gap height={16} />

        <View style={styles.containerGopay}>
          <View>
            <View style={styles.dashGrey} />
            <Gap height={5} />
            <View style={styles.dashWhite} />
          </View>
          <Gap width={8} />
          <ScrollView style={styles.scrolGopay}>
            <View>
              <View style={styles.topCardGopay} />
              <Gap height={6} />
              <TouchableOpacity style={styles.cardGopay}>
                <ImgGopay />
                <Gap height={6} />
                <Text style={styles.numberGopay}>Rp 12.739</Text>
                <Text style={styles.historyGopay}>Klik & cek riwayat</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.containerIconGopay}>
            <TouchableOpacity style={styles.iconGopay}>
              <IconBayar />
              <Gap height={8} />
              <Text style={styles.textGopay}>Bayar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconGopay}>
              <IconTopup />
              <Gap height={8} />
              <Text style={styles.textGopay}>Top Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconGopay}>
              <IconEksplor />
              <Gap height={8} />
              <Text style={styles.textGopay}>Eksplor</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={16} />

        <View style={styles.containerMenu}>
          {menu.map(item => (
            <TouchableOpacity style={styles.menu}>
              <item.image />
              <Gap height={8} />
              <Text style={styles.labelMenu}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Gap height={16} />

        <TouchableOpacity style={styles.containerGoclub}>
          <View style={styles.dots}>
            <IconDots />
          </View>
          <IconStar />
          <Gap width={16} />
          <View style={styles.goClub}>
            <Text style={styles.textGoClub}>117 XP lagi ada Harta Karun</Text>
            <Gap height={8} />
            <View style={styles.containerBar}>
              <Animated.View style={styles.bar} />
            </View>
          </View>
          <Gap width={16} />
          <IconArrow />
        </TouchableOpacity>
        <Gap height={16} />

        <Text style={styles.titleAksesCepat}>Akses Cepat</Text>
        <Gap height={8} />
        <View style={styles.containerAksescepat}>
          <TouchableOpacity style={styles.flexRow}>
            <IconGoride height={25} width={25} />
            <Gap width={16} />
            <Text style={styles.textAksesCepat}>
              Pintu Masuk Lobby K-Link Tower
            </Text>
            <Gap width={16} />
            <IconArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexRow}>
            <IconGoride height={25} width={25} />
            <Gap width={16} />
            <Text style={styles.textAksesCepat}>
              Pintu Masuk Lobby K-Link Tower
            </Text>
            <Gap width={16} />
            <IconArrow />
          </TouchableOpacity>
        </View>
        <Gap height={24} />

        <View>
          <IconGopaylater />
          <Gap height={8} />
          <Text>
            Lebih hemat pakai GoPayLater <IconEmoji />
          </Text>
          <Gap height={8} />
          <Text style={styles.textGpaylater}>
            Yuk, belanja di Tokopedia pake GoPayLater dan nikmatin cashback-nya~
          </Text>
        </View>
        <Gap height={24} />

        <View>
          <View style={styles.cardPromotion}>
            <Image
              source={ImgPromotion1}
              style={styles.imgPromotion}
              resizeMode="stretch"
            />
            <View style={styles.contentPromotion}>
              <View style={[styles.flexRow, styles.alignCenter]}>
                <Text>Makin Seru</Text>
                <Gap width={3} />
                <IconEmoji1 />
              </View>
              <Gap height={8} />
              <Text style={styles.textPromotion}>
                Aktifkan & Sambungkan GoPay & GoPayLater di Tokopedia
              </Text>
              <Gap height={8} />
            </View>
          </View>
        </View>
        <Gap height={24} />

        <View>
          <View style={styles.cardPromotion}>
            <Image
              source={ImgPromotion2}
              style={styles.imgPromotion}
              resizeMode="stretch"
            />
            <View style={styles.contentPromotion}>
              <View style={[styles.flexRow, styles.alignCenter]}>
                <Text>Makin Seru</Text>
                <Gap width={3} />
                <IconEmoji1 />
              </View>
              <Gap height={8} />
              <Text style={styles.textPromotion}>
                Sambungin Akun ke Tokopedia, Banyakin Untung
              </Text>
              <Gap height={8} />
            </View>
          </View>
        </View>
        <Gap height={24} />

        <View>
          <View style={styles.cardPromotion}>
            <Image
              source={ImgPromotion3}
              style={styles.imgPromotion}
              resizeMode="stretch"
            />
            <View style={styles.contentPromotion}>
              <View style={[styles.flexRow, styles.alignCenter]}>
                <Text>Makin Seru</Text>
                <Gap width={3} />
                <IconEmoji1 />
              </View>
              <Gap height={8} />
              <Text style={styles.textPromotion}>
                Promo Belanja Online 6.6 Cashback hingga Rp 100.000
              </Text>
              <Gap height={8} />
            </View>
          </View>
        </View>
        <Gap height={24} />
      </ScrollView>
    </View>
  );
}

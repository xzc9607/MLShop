import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';
import Global from '../Global';

export default class help extends Component {
  constructor(props){
    super(props);
    this.state={

        data: {
          "CarInfoList": {
            "content": [
              {
                "id": "eP44uaH7G9q8TUS1lIVk23A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S5 1.3T 手动尊贵型",
                "guidePrice": "7.68万",
                "price": 7.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8783BC2C-2547-4E9E-B3A0-01A9A9D3C0E9"
              },
              {
                "id": "KQlopnITGNOZzfiu6S6yG3A11",
                "brand": "北汽幻速",
                "model": "2015款幻速H3 1.5L 手动舒适型",
                "guidePrice": "5.98万",
                "price": 5.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/2A199912-259B-49C2-8619-44B95C9A8C0C"
              },
              {
                "id": "znXL0GEJHtqRBY8vSegrF3A11",
                "brand": "北汽幻速",
                "model": "2017款幻速H6 1.5L 基本型 厢式运输车",
                "guidePrice": "5.98万",
                "price": 5.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/A050271A-3114-41A8-9D0D-FE45FF53AD83"
              },
              {
                "id": "blinZRYhFUa7ZdjhJ9aVl1A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S5 1.3T 手动舒适型",
                "guidePrice": "6.88万",
                "price": 6.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B93360A8-E7E0-4B65-8DEE-533E6166B9E7"
              },
              {
                "id": "PhizotuuGN6iT_GCENrRl0A11",
                "brand": "北汽幻速",
                "model": "2015款幻速H3 1.5L 手动标准型",
                "guidePrice": "5.58万",
                "price": 5.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B186B07E-91ED-485D-9BE3-894735B79C62"
              },
              {
                "id": "ou1LSzTBHpiFmTH_WyEK00A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S6 1.5T CVT劲享型",
                "guidePrice": "8.98万",
                "price": 8.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/A5326CEE-F59B-4DDF-87DF-D01A11E36D8F"
              },
              {
                "id": "CkeVgapGHUqiNdMD5ENvp0A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S5 1.3T CVT尊贵型",
                "guidePrice": "8.58万",
                "price": 8.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/A3CCC5E7-3394-444B-B183-C8D426B2898F"
              },
              {
                "id": "BHQ0VuiUHWyzw9IotfP4B2A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S5 1.6L 手动舒适型",
                "guidePrice": "6.38万",
                "price": 6.38,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/611E1204-F7AB-4B21-B48D-9FE4D3065109"
              },
              {
                "id": "wg8JMkkMH6K3o9vTJJMjH3A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S6 1.5T 手动智能型",
                "guidePrice": "10.58万",
                "price": 10.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B8D3DC8E-4181-4E06-82DE-D56340B31118"
              },
              {
                "id": "cKJ3eXtfFhi9o1lsGoEHH2A11",
                "brand": "北汽幻速",
                "model": "2016款幻速S3L 1.5L 手动尊享型",
                "guidePrice": "6.68万",
                "price": 6.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/CED2C4A1-BB4D-4671-97F2-77877E05B3F6"
              },
              {
                "id": "SJrt6JcvFhKIu7MbhjKmf3A11",
                "brand": "北汽幻速",
                "model": "2017款幻速H6 1.8L 基本型 厢式运输车",
                "guidePrice": "6.38万",
                "price": 6.38,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/E82B06C8-D55F-4A7D-BFA9-2E0534FA29F0"
              },
              {
                "id": "wxaHcfeWGRmy_dmlEm5Tk2A11",
                "brand": "北汽幻速",
                "model": "2016款幻速H3F 1.5L 手动舒适型",
                "guidePrice": "5.88万",
                "price": 5.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/0F7C5F5B-1325-48F6-AD90-D54CB1C2CC6E"
              },
              {
                "id": "Er85lHr1Hj2CntBj84Xlm3A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S6 1.5T CVT尊享型",
                "guidePrice": "11.68万",
                "price": 11.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/20D70FF4-FDF8-4905-BCE3-344B11843783"
              },
              {
                "id": "D0ckdsTSHPGrJEyXEVsux3A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S6 1.5T 手动风尚型",
                "guidePrice": "8.88万",
                "price": 8.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/DBFD316E-7158-42CC-80DC-925F05773864"
              },
              {
                "id": "BEDeNIX4H2KUI1Nj1yuB00A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S5 1.3T CVT舒适型",
                "guidePrice": "7.68万",
                "price": 7.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8C1476B0-3646-4569-AA42-DE5D3B96DFDD"
              },
              {
                "id": "PIk5agstGd2ACR4gYP_ok2A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S6 1.5T 手动领先型",
                "guidePrice": "9.68万",
                "price": 9.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/372FD394-F9BC-492E-AA95-BDB21993CAEE"
              },
              {
                "id": "yuN4KzlKHVSCgdJSVSt382A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S5 1.3T 手动豪华型",
                "guidePrice": "7.28万",
                "price": 7.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/3EBB63FB-B3E1-4E12-B8B7-A878CE97E34A"
              },
              {
                "id": "BQ2moVLOHvmzPKvGIz0NE0A11",
                "brand": "北汽幻速",
                "model": "2018款幻速S7 1.5T 自动尊享型",
                "guidePrice": "9.88万",
                "price": 9.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/1DEAB190-29D0-49AA-A09F-859F0800AA94"
              },
              {
                "id": "M08on__3H82tYSvl03lX80A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S5 1.3T CVT豪华型",
                "guidePrice": "8.18万",
                "price": 8.18,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B70022AB-5DDA-4BB9-A627-F5A89960EE1A"
              },
              {
                "id": "IY_cPPpRHpe5hDRkdhIUy1A11",
                "brand": "北汽幻速",
                "model": "2017款幻速H3 1.5L 手动舒适天窗版",
                "guidePrice": "5.98万",
                "price": 5.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/0BB5D306-4801-4A35-BEB2-0E22CEF7E76E"
              },
              {
                "id": "QBl9g_7_FVGc_YghlBWkW0A11",
                "brand": "北汽幻速",
                "model": "2018款幻速S7 1.5T 手动豪华型",
                "guidePrice": "8.48万",
                "price": 8.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8EC1B2F2-EEE4-4C22-9F8D-B55206B719B6"
              },
              {
                "id": "Oqd6s7X4HIegZizovSUS13A11",
                "brand": "北汽幻速",
                "model": "2018款幻速S3 1.5L 手动豪华型",
                "guidePrice": "5.88万",
                "price": 5.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/BF7DAB41-1564-4F9A-901A-5253C6A460A1"
              },
              {
                "id": "SFMpCxVrFzyGYuyI6Y_Jo2A11",
                "brand": "北汽幻速",
                "model": "2018款幻速S7 1.5T 手动尊享型",
                "guidePrice": "8.98万",
                "price": 8.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/1A2A068C-D522-4195-8EA0-A51C10036DB5"
              },
              {
                "id": "z2drUpxOGkqIuH9DSPFPJ0A11",
                "brand": "北汽幻速",
                "model": "2016款幻速S2 1.5L 手动创业型",
                "guidePrice": "5.18万",
                "price": 5.18,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/AFE31FAA-4BF5-4C4C-9142-A51A9866CE6D"
              },
              {
                "id": "H2mmCEYJG2G8peWOVnH123A11",
                "brand": "北汽幻速",
                "model": "2017款幻速H6 1.8L 舒适型 客车",
                "guidePrice": "7.13万",
                "price": 7.13,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/85E4CF69-38A0-4D37-B8BF-8EA0EC9CE2CC"
              },
              {
                "id": "BPGKWZLuHiW6EAIziosBy0A11",
                "brand": "北汽幻速",
                "model": "2017款幻速H6 1.5L 舒适型 客车",
                "guidePrice": "6.73万",
                "price": 6.73,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/C20D9D59-1A40-4C95-B0A6-A35B02209308"
              },
              {
                "id": "nEKPkH9lE42CkllGwR4Xc3A11",
                "brand": "北汽幻速",
                "model": "2016款幻速S2 1.5L 手动豪华型",
                "guidePrice": "6.08万",
                "price": 6.08,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/C7719907-12DA-4889-9DAB-B0308AEA1055"
              },
              {
                "id": "ZJMheBEHEN_mdWAIltvlx1A11",
                "brand": "北汽幻速",
                "model": "2016款幻速S2 1.5L 手动舒适型",
                "guidePrice": "5.78万",
                "price": 5.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/0063E93D-DE13-4F6D-8DA8-799BA7DFFE1C"
              },
              {
                "id": "_5EmiYQLHPi2etlqT9iuB3A11",
                "brand": "北汽幻速",
                "model": "2018款幻速S7 1.5T 自动智尊型",
                "guidePrice": "11.58万",
                "price": 11.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/66D8BDF3-84FB-4C24-9489-A35B93123EDF"
              },
              {
                "id": "ChcotZcmHHaHjfu3e31KT0A11",
                "brand": "北汽幻速",
                "model": "2017款幻速H6 1.5L 标准型 客车",
                "guidePrice": "6.33万",
                "price": 6.33,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/7A0AFD59-3A11-4512-B401-AC4E2779699D"
              },
              {
                "id": "lec_3kWrEpK9gNDm8pOgH0A11",
                "brand": "北汽幻速",
                "model": "2015款幻速H2 1.5L AMT舒适型",
                "guidePrice": "6.18万",
                "price": 6.18,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/022BEA6D-A8C0-43C5-A469-941471556DD7"
              },
              {
                "id": "D0JHQNuvGuyHoqeIKPLWz3A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S6 1.5T CVT畅享型",
                "guidePrice": "9.88万",
                "price": 9.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/CD7CCF0D-7B5C-4BFE-8D94-A57EC96227F8"
              },
              {
                "id": "F6Y5e4IPFYK_VT1lcmmsu2A11",
                "brand": "北汽幻速",
                "model": "2015款幻速H2 1.5L AMT豪华型",
                "guidePrice": "6.48万",
                "price": 6.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/D08A2DFB-FC63-4A04-B1C4-F37B032F0340"
              },
              {
                "id": "Fp8arhSwFgG4e925eRTfn2A11",
                "brand": "北汽幻速",
                "model": "2016款幻速H2 V 1.5L 手动标准型",
                "guidePrice": "3.58万",
                "price": 3.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/27F5CEDE-92C2-48C6-B64C-C6070F8418A0"
              },
              {
                "id": "lcWiz6otHDufCSqbnDlgn2A11",
                "brand": "北汽幻速",
                "model": "2015款幻速H2 1.5L 手动舒适型",
                "guidePrice": "5.88万",
                "price": 5.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8C9E30B4-270C-49D2-8AEA-BE530F777C38"
              },
              {
                "id": "fNfCKlkvEcqppfG2U5TfU0A11",
                "brand": "北汽幻速",
                "model": "2016款幻速H2 E 1.5L 手动时尚型",
                "guidePrice": "4.38万",
                "price": 4.38,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/C3066DF4-43C4-4527-A703-430064B0A910"
              },
              {
                "id": "azCXnxfFF064Ni9hankkJ3A11",
                "brand": "北汽幻速",
                "model": "2018款幻速S7 1.5T 手动舒适型",
                "guidePrice": "7.88万",
                "price": 7.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/EDB3C5F9-7464-4CA0-BDEC-8DE18028D22B"
              },
              {
                "id": "rP_K3_l3Feih7MWlHK2dX3A11",
                "brand": "北汽幻速",
                "model": "2016款幻速H2 V 1.5L 手动舒适型",
                "guidePrice": "3.98万",
                "price": 3.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/01730992-6698-4A5B-B9B8-E8E79B303F58"
              },
              {
                "id": "tpUzM_SQGNO8X4NEE9irv1A11",
                "brand": "北汽幻速",
                "model": "2015款幻速H3 1.5L 手动豪华型",
                "guidePrice": "6.28万",
                "price": 6.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/2121D43C-469E-4D0C-B7CD-750CAE266D9E"
              },
              {
                "id": "XMAGc_USHK_ik69lSHAq43A11",
                "brand": "北汽幻速",
                "model": "2017款幻速S3 1.5L 手动舒适型",
                "guidePrice": "5.38万",
                "price": 5.38,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/48B2F6EB-FE59-44AC-8D5B-3FF06EF81047"
              },
              {
                "id": "AVTwBUZIGhSkSDFLKg6ri1A11",
                "brand": "北汽幻速",
                "model": "2016款幻速H2 E 1.5L 手动精英型",
                "guidePrice": "4.68万",
                "price": 4.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/ED4805EF-AB4D-4625-8B28-0417D7BEFCEF"
              },
              {
                "id": "HEaqyNgdHHu597X8_qdxP3A11",
                "brand": "北汽幻速",
                "model": "2018款幻速S7 1.5T 自动尊贵型",
                "guidePrice": "10.68万",
                "price": 10.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/C925607D-3751-4B8C-BFB2-542F9D0150EC"
              },
              {
                "id": "FMpdpSnVGRWiKumKsT90V1A11",
                "brand": "北汽幻速",
                "model": "2018款幻速H5 1.3T CVT舒适型",
                "guidePrice": "8.18万",
                "price": 8.18,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/3BD56700-B98B-4029-9EF1-D4CE0B55F623"
              },
              {
                "id": "smSJgaUvF9WeqNqBZPPba0A11",
                "brand": "北汽幻速",
                "model": "2018款幻速H5 1.3T CVT豪华型",
                "guidePrice": "8.88万",
                "price": 8.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/E9A11098-08F9-4DF0-8761-293D40F0CC18"
              },
              {
                "id": "k_3TmJmdF42839Ybu4NCp1A11",
                "brand": "北汽幻速",
                "model": "2016款幻速H3F 1.5L 手动豪华型",
                "guidePrice": "6.48万",
                "price": 6.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/5AA08DCE-E1A6-4D1C-9EF9-4FDC5C6F50EB"
              },
              {
                "id": "wfvCx65hFKSURMZT_njBc3A11",
                "brand": "北汽幻速",
                "model": "2016款幻速H2 E 1.5L 手动经典型",
                "guidePrice": "3.98万",
                "price": 3.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/5B264113-3C01-485E-8A6D-BE834ABB0653"
              },
              {
                "id": "FBkJnl8VFzW4su1QAbAwa2A11",
                "brand": "北汽幻速",
                "model": "2015款幻速H2 1.5L AMT尊贵型",
                "guidePrice": "6.68万",
                "price": 6.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/4F08C2D1-987A-48D4-8C1F-9C96862A673F"
              },
              {
                "id": "lnwfuFlIGz_GulovQQu4H1A11",
                "brand": "北汽幻速",
                "model": "2016款幻速H3F 1.5L 手动尊贵型",
                "guidePrice": "6.78万",
                "price": 6.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/6A68B1FE-CC80-42C5-8A4C-37BBB67998A3"
              },
              {
                "id": "hvsW6LvpHaO5Bfd1Y9qkB1A11",
                "brand": "北汽幻速",
                "model": "2017款幻速H6 1.8L 豪华型 客车",
                "guidePrice": "7.53万",
                "price": 7.53,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/A187B8EF-A64E-4A6E-A879-F190322FF175"
              },
              {
                "id": "RmCMV_ZyHIeTAzMWrV_j62A11",
                "brand": "北汽幻速",
                "model": "2018款幻速S7 1.5T 手动尊贵型",
                "guidePrice": "9.58万",
                "price": 9.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/1AB1FDAB-A8F7-48D4-8E1E-442C59DBFABA"
              },
              {
                "id": "oemdU01FFEi4mwuPDXoTe2A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B50 1.6L 自动舒适型",
                "guidePrice": "9.58万",
                "price": 9.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/C5973BBD-FFBA-4DF6-B874-CFA094B5107B"
              },
              {
                "id": "QPK5DpXxHwS8QLhZqRTws0A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B50 1.6L 手动豪华型",
                "guidePrice": "8.98万",
                "price": 8.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/C2D7A606-389E-44D0-B2C5-24D36D02D752"
              },
              {
                "id": "avrVDUT_EUWJs_kuVaHig1A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾B30 1.6L 手动20周年纪念版",
                "guidePrice": "7.28万",
                "price": 7.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/3447B471-FF1D-4C6A-8F13-92F80984763C"
              },
              {
                "id": "MLmDtZcUFXawZApK2X_2N2A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾B50 1.4T 自动20周年纪念版",
                "guidePrice": "10.58万",
                "price": 10.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/C46EEC4C-F381-47CE-A613-1A9AF283ACD1"
              },
              {
                "id": "LA2G58vrHgWUavjB5eh4X2A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾B30 1.6L 手动技术型",
                "guidePrice": "6.58万",
                "price": 6.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8038DCD5-5BE1-444B-AC96-A4121101D095"
              },
              {
                "id": "k5XM2BoAECu9bnnj4LiOd1A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B50 1.6L 自动豪华型",
                "guidePrice": "10.08万",
                "price": 10.08,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/A6D6934B-8D4A-41F7-B12B-6DD373FAEA11"
              },
              {
                "id": "e5tJw_obFE2IyM086QrWQ3A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾B30 1.6L 自动尊享型",
                "guidePrice": "8.58万",
                "price": 8.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/5620FA5F-9102-460F-8E20-3983514C1941"
              },
              {
                "id": "D4xuIFzRHMWu03sXcFjNs1A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾B30 1.6L 手动豪华型",
                "guidePrice": "7.28万",
                "price": 7.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/F2328910-383D-44D0-AD8E-50BDEEC330FF"
              },
              {
                "id": "fKWPG_7ZHFiRObrm86_3i0A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾B50 1.6L 手动20周年纪念版",
                "guidePrice": "8.58万",
                "price": 8.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/DD03EC51-C2FF-42ED-BA06-E0DE7AA178E2"
              },
              {
                "id": "r8BPGveeG56ZhzJjgPcqv0A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾B30 1.6L 手动舒适型",
                "guidePrice": "6.98万",
                "price": 6.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B60093A2-020A-414D-A684-4B0601D66289"
              },
              {
                "id": "bK576z9BGgO_Gb6JEhRbb0A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾B30 1.6L 手动尊享型",
                "guidePrice": "7.58万",
                "price": 7.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/9A11015F-D436-4AEC-A38E-909FE5537C54"
              },
              {
                "id": "X0yN0bqmF8_TMsVqME3hN1A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B50 1.6L 手动技术型",
                "guidePrice": "8.18万",
                "price": 8.18,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/BD69A4D0-FC43-4795-A981-76ED0EF39D78"
              },
              {
                "id": "xf_uz4SUGxGHyrxjGvbdD1A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B50 1.4T 自动豪华型",
                "guidePrice": "10.38万",
                "price": 10.38,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/2D8B292B-FDB4-4513-AFD7-65FDEABB727B"
              },
              {
                "id": "sJAyFoZzGDSc5m6gKZyqI3A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B50 1.6L 手动舒适型",
                "guidePrice": "8.58万",
                "price": 8.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/A08B8FDE-C7F1-4E14-A998-104878C50A64"
              },
              {
                "id": "vU6E_HcYHGGyXjra5H5rz3A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B50 1.4T 自动运动豪华型",
                "guidePrice": "10.78万",
                "price": 10.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/2277882E-A288-41FC-BC0A-288F48472981"
              },
              {
                "id": "fLpqA2keFf2wS2P1FCeq62A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B90 1.8T 自动豪华型 十周年纪念版",
                "guidePrice": "15.58万",
                "price": 15.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/06C7AAC0-C7A2-4717-BD0D-F928C1D77576"
              },
              {
                "id": "DJAgyip3FVGzxF1OgawmY3A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B50 1.4T 自动运动尊贵型",
                "guidePrice": "11.78万",
                "price": 11.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/7CC38A6C-63A5-48C9-8DBE-7B0E54B38062"
              },
              {
                "id": "fP8CivwgEkagj_0fzv_XR1A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B90 1.8T 自动舒适型 十周年纪念版",
                "guidePrice": "14.58万",
                "price": 14.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/21C495AC-A191-417E-8CF8-C316EC6E1188"
              },
              {
                "id": "fOP6HkR3FAe4ehWq_Otb_2A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B90 1.8T 自动尊贵型 十周年纪念版",
                "guidePrice": "17.78万",
                "price": 17.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/1018DDD5-CC6E-44CE-B2D6-36F0DE938F12"
              },
              {
                "id": "umpW9hWnGNOcc3Gf113xx3A11",
                "brand": "一汽奔腾",
                "model": "2015款奔腾B90 1.8T 自动豪华型",
                "guidePrice": "15.58万",
                "price": 15.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/BBD6FCB1-1CDC-4831-AE52-8B498EE62C60"
              },
              {
                "id": "td2G5JYFEFaCsc3idfLFG1A11",
                "brand": "一汽奔腾",
                "model": "2015款奔腾B90 1.8T 自动尊贵型",
                "guidePrice": "17.78万",
                "price": 17.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/F7A7FF78-AB65-47A5-8802-E55B3609AAA2"
              },
              {
                "id": "uWDHGBgIFE60cEGUK7jSN3A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾B50 1.6L 手动智领型",
                "guidePrice": "12.28万",
                "price": 12.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/0C8EFA96-6CF7-403B-BBC2-1F270CCEB167"
              },
              {
                "id": "kn3ToEwwEVyKl15E9cuEn0A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B90 1.8T 自动旗舰型 十周年纪念版",
                "guidePrice": "19.98万",
                "price": 19.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/46004ECC-BCC8-463D-9313-D754C6F0C8B0"
              },
              {
                "id": "BgnF6MfIEGO0g7cm55VI_3A11",
                "brand": "一汽奔腾",
                "model": "2015款奔腾B90 2.0T 自动豪华型",
                "guidePrice": "15.98万",
                "price": 15.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/D69A3F15-2EEB-4D11-B571-B7CD25297EDF"
              },
              {
                "id": "CEFiubjnFBqbN1L3clZXt3A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾B30 1.6L 自动尊贵型",
                "guidePrice": "9.28万",
                "price": 9.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/BFCF8EBA-860B-424B-94A0-15D237A2FD17"
              },
              {
                "id": "Dr0gqqF6ExakOshHpjmRA3A11",
                "brand": "一汽奔腾",
                "model": "2015款奔腾B90 1.8T 自动旗舰型",
                "guidePrice": "19.98万",
                "price": 19.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B5D94AFE-A928-43A4-96C8-9524E1A6A5F4"
              },
              {
                "id": "tT0hlOhyEViV9od27dzt72A11",
                "brand": "一汽奔腾",
                "model": "2015款奔腾B90 1.8T 自动舒适型",
                "guidePrice": "14.58万",
                "price": 14.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/62D66FC7-ACEA-41AD-B37A-8B69ED4FC8FC"
              },
              {
                "id": "cLeIeXfWFyKoclws9XU2w1A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾B30 1.6L 自动舒适型",
                "guidePrice": "7.98万",
                "price": 7.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/49342331-DEFC-49B1-A81A-97146730E61F"
              },
              {
                "id": "UkAnbOJ1FvetPri39UpjG0A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾B70 2.0L 手动智领型",
                "guidePrice": "14.08万",
                "price": 14.08,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B66AA09F-CE51-4FAF-9094-047F49B51014"
              },
              {
                "id": "eMi82rCZGeew14W7Jwy8g2A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 2.0L 手动十周年纪念版",
                "guidePrice": "10.48万",
                "price": 10.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/45BA2D8D-C5C9-47E1-A72F-ABBBFE506B07"
              },
              {
                "id": "CgwbGcPTF5ikjaLHIRWyx0A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 2.0L 手动豪华型",
                "guidePrice": "10.98万",
                "price": 10.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/CBD64950-9C68-457C-B46B-4ED3FBF06532"
              },
              {
                "id": "Y6x9nds8Hy6Qsb1Ugpchf1A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾B70 2.0L 自动互联智享型",
                "guidePrice": "11.48万",
                "price": 11.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/41D05DAA-4498-40EC-90D1-041FE1476FCD"
              },
              {
                "id": "zrHLXquQEWe5ik3HOXqwD1A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾B70 2.0L 手动互联智享型",
                "guidePrice": "10.48万",
                "price": 10.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/C69D7E0C-255F-4F98-8935-2E38C3552BE7"
              },
              {
                "id": "hSZjdE15FlCDcWmRO8NGA0A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 2.0L 手动舒适型",
                "guidePrice": "9.98万",
                "price": 9.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/41EE89D5-E9F1-49D6-B643-BFA2DECDC92D"
              },
              {
                "id": "sgRSB9g0F8mi_Kkzl3FZA0A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 2.0L 自动十周年纪念版",
                "guidePrice": "11.48万",
                "price": 11.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/1B4ACC8E-8634-456B-80D3-DC3F43593C22"
              },
              {
                "id": "JWgg8dyMH1eklginYJs243A11",
                "brand": "一汽奔腾",
                "model": "2015款奔腾B90 2.0T 自动旗舰型",
                "guidePrice": "20.18万",
                "price": 20.18,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/11FAFA97-1BCA-4796-AC6B-D8FC008C4940"
              },
              {
                "id": "LU7nFgS9GV2cGNduhHEXX2A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 2.0L 自动尊享型",
                "guidePrice": "12.28万",
                "price": 12.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/27C95932-F4D1-456F-8FD3-FF240D2EF897"
              },
              {
                "id": "LhGu9OiIH9ir4LOSnT4cX3A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 2.0L 自动豪华型",
                "guidePrice": "11.98万",
                "price": 11.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/BA352E05-0832-4274-8754-BFE11D3F7A83"
              },
              {
                "id": "bIQ_q0ihEQ_2eGadkSpk91A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 1.8T 自动运动尊享型",
                "guidePrice": "13.98万",
                "price": 13.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/814137AB-60CA-448A-AC8E-DB9EE1BABA43"
              },
              {
                "id": "q3X8dlFAGsCbk5iqvqnyr3A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 2.0L 自动舒适型",
                "guidePrice": "10.98万",
                "price": 10.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/01294634-D1F8-4DDB-9859-2F0FBDCE78B4"
              },
              {
                "id": "lbGfX2MSGG6GSPjtPOr8H2A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾B70 2.0L 自动智领型",
                "guidePrice": "15.08万",
                "price": 15.08,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B6BA31F3-C5F7-462A-A2CA-124BF6C2BFBA"
              },
              {
                "id": "TJTQXmeHFO23KpLvEfyqj3A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 1.8T 自动精英型",
                "guidePrice": "12.28万",
                "price": 12.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/9795E992-CB05-4775-A923-A20E6CFFC908"
              },
              {
                "id": "xC7UrS22FKyvdcGmVb4GW0A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾B70 1.8T 自动轿跑互联智享型",
                "guidePrice": "12.28万",
                "price": 12.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/41508572-70BB-4362-A19B-1519BDC6FCCE"
              },
              {
                "id": "unl7QqDvGheY51mZwlJQF0A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 2.0L 手动尊享型",
                "guidePrice": "11.28万",
                "price": 11.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/72441F10-E6BA-4A11-ACE0-22AABA623556"
              },
              {
                "id": "IWfyGcBiEsau1hKk9IRUi3A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 网红版 1.6L 手动技术型",
                "guidePrice": "6.68万",
                "price": 6.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/681ED1F9-D791-413D-9EAF-B888286248D1"
              },
              {
                "id": "SEB2eUnnGmCIO7VWUKabi2A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 网红版 1.6L 手动舒适型",
                "guidePrice": "7.08万",
                "price": 7.08,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8BA191B8-91E3-4D69-A3C8-204AE8E9FBAF"
              },
              {
                "id": "N9fwwNcHHU61VEw1qPVyv3A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 1.8T 自动运动尊贵型",
                "guidePrice": "14.98万",
                "price": 14.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/214106B7-06E7-40D8-9C76-230E58EE17CA"
              },
              {
                "id": "SEzVqRmIEumoUUtxlUlEy3A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 1.6L 手动互联智酷型",
                "guidePrice": "7.98万",
                "price": 7.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8E67D2EB-0E3D-4370-8649-B79640C97CB3"
              },
              {
                "id": "mzCXLIsnE6SV_xiYLv9_B0A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 1.6L 自动互联智酷型",
                "guidePrice": "8.98万",
                "price": 8.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/0A09C0E6-D212-4357-AA77-E174B2602040"
              },
              {
                "id": "VZswTbcfEGmkBwD2zoE1d3A11",
                "brand": "一汽奔腾",
                "model": "2016款奔腾B70 1.8T 自动运动豪华型",
                "guidePrice": "12.98万",
                "price": 12.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/701FEC4B-E779-439A-97FE-8F5942DF729B"
              },
              {
                "id": "UDT8Zzn6HlquXTHbOY5JA3A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 网红版 1.6L 自动豪华型",
                "guidePrice": "8.48万",
                "price": 8.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/9D1DC94F-E731-4B1B-AF88-058379E16CB3"
              },
              {
                "id": "j9Zqu_iNEE_jvJMXsuxbw1A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 网红版 1.6L 手动豪华型",
                "guidePrice": "7.48万",
                "price": 7.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/DCFA0D96-EC71-46CD-BC99-B877F58CDB37"
              },
              {
                "id": "AIL7IVw7GwqCLMd3CPgCW3A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 1.6L 手动互联智享型",
                "guidePrice": "8.78万",
                "price": 8.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/5CAFABDB-34A8-43AF-8177-4F87396B79C3"
              },
              {
                "id": "iJxEjxOaFt2VySlKejPA50A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 网红版 1.6L 自动互联智享型",
                "guidePrice": "9.68万",
                "price": 9.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/56489FF7-B7A0-4FA0-ACCF-D1790E9DAFF3"
              },
              {
                "id": "eDTGMaPdHUSK2nGOc3_qq0A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 网红版 1.6L 手动互联智酷型",
                "guidePrice": "7.98万",
                "price": 7.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/0D5038AE-051D-45BC-BB63-529082380062"
              },
              {
                "id": "xf0ox8Q0EoCe1S5eQdqvP3A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 网红版 1.6L 自动互联智酷型",
                "guidePrice": "8.98万",
                "price": 8.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/DC2A47FB-A849-49A8-ACC2-DB7DB48C3DAA"
              },
              {
                "id": "kgb3RfrGEfygi8ZClmaZI0A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X80 Live版 2.0L 自动舒适型",
                "guidePrice": "12.98万",
                "price": 12.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/F2307AB7-F389-4119-9E40-F382FF1001A1"
              },
              {
                "id": "SFd1AMdfGQ_taPmrwV4nD0A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 1.6L 自动互联智享型",
                "guidePrice": "9.68万",
                "price": 9.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/0144354A-A7F7-4CF1-B6C6-74C5D3655FB9"
              },
              {
                "id": "Sj66i04CFiWBe95mClGLI2A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾X80 2.0L 手动基本型",
                "guidePrice": "9.98万",
                "price": 9.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/623127CD-57BA-490C-93F6-3D8F99C2039C"
              },
              {
                "id": "Alfa1QRjHGuKU9p0iqG0d0A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾X80 2.0L 手动舒适型",
                "guidePrice": "11.78万",
                "price": 11.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/14438751-8687-42F2-B4ED-10429241A6B8"
              },
              {
                "id": "jqxqkX2QEquVWr8d4_f0u1A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X80 Live版 1.8T 自动豪华型",
                "guidePrice": "13.78万",
                "price": 13.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/E431DD70-A26F-411D-8059-AD8F437C003A"
              },
              {
                "id": "HyfHOJHXETW7W1sMpF6Si2A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾X80 2.0L 手动豪华型",
                "guidePrice": "12.38万",
                "price": 12.38,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/423C1EF2-A9B7-480C-B8C1-CDF8AD0148F5"
              },
              {
                "id": "AvNRRegPFim6pyDypFFjn0A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X80 Live版 1.8T 自动旗舰型",
                "guidePrice": "14.78万",
                "price": 14.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/94E53F19-2578-4CBF-9AF2-EAAFE860CD49"
              },
              {
                "id": "LwqDEoujGvO5hVLPZAACP0A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X40 1.6L 自动互联智尊型",
                "guidePrice": "10.18万",
                "price": 10.18,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/BD159DDC-2A8A-4F5A-9ECA-2FD944FBCE24"
              },
              {
                "id": "KyXQm6SAHVKjEmfgpCtZ81A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾X80 Live版 2.0L 手动豪华型",
                "guidePrice": "12.38万",
                "price": 12.38,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/6F321D91-8817-4237-BAB8-9E1740DAB891"
              },
              {
                "id": "xjHXm00TGQ6KAzkGGaNFk1A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾X80 2.0L 自动技术型",
                "guidePrice": "12.78万",
                "price": 12.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B34C8EA5-2E0D-4753-8E7B-232B8BCF5FCB"
              },
              {
                "id": "uN0s1W9ZFme2aE9O6EEaw2A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾X80 1.8T 自动运动型",
                "guidePrice": "14.78万",
                "price": 14.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/3CAF4ECD-CE06-4037-BC64-3D5551D19FA7"
              },
              {
                "id": "sM7B_r89Gbi2XVsfZ1IGg3A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾X80 2.0L 自动精英型",
                "guidePrice": "13.38万",
                "price": 13.38,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/2677570C-2B72-4278-985D-3E960E05557B"
              },
              {
                "id": "NjuPOxOCGRWE9tJ2D4g971A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾X80 1.8T 自动豪华型",
                "guidePrice": "13.78万",
                "price": 13.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/A2AD5103-03FE-405B-9586-D29675104F6E"
              },
              {
                "id": "HllHa_MBF0G_AABF7N6GB0A11",
                "brand": "一汽奔腾",
                "model": "2017款奔腾X80 2.0L 自动20周年纪念版",
                "guidePrice": "13.48万",
                "price": 13.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8BEEE325-5010-454D-9621-8D6385F1B020"
              },
              {
                "id": "oN5kons_FbmJXM1c0jKjX0A11",
                "brand": "一汽奔腾",
                "model": "2018款奔腾B50 1.4T 自动智领型",
                "guidePrice": "14.08万",
                "price": 14.08,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/9BCD2C28-D448-4E8F-8394-E048BE27C222"
              },
              {
                "id": "CFVYWyIBFzOBjpc9uJXWN2A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 L 2.3T 自动两驱尊贵版",
                "guidePrice": "15.98万",
                "price": 15.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/D172D7EE-E02E-4361-B4D3-29BD6BA18BCC"
              },
              {
                "id": "w68804j8FUuyuGsGVADWx2A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 2.0T 手动两驱尊贵版",
                "guidePrice": "12.98万",
                "price": 12.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/918CADD6-871F-44F0-B5D0-069128247214"
              },
              {
                "id": "EaFvoBIFHDa0SS1BULzhN3A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 L 2.0T 手动四驱尊贵版",
                "guidePrice": "14.98万",
                "price": 14.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/CFBD8516-14A5-414B-BAFD-15769072948C"
              },
              {
                "id": "Nzw6F9JJFhG3zEZJGhcff0A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 L 2.3T 手动四驱尊享版",
                "guidePrice": "15.98万",
                "price": 15.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/FD761FF6-FA1C-4D48-948D-0CD1918164E9"
              },
              {
                "id": "IoUqLYG1FV6btGPpJ1tWg2A11",
                "brand": "北京汽车",
                "model": "2018款BJ40 L 2.0T 手动尊贵版 柴油",
                "guidePrice": "15.99万",
                "price": 15.99,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/845B6AD8-75BF-45E6-B369-5E834027A540"
              },
              {
                "id": "Dphdd8Q2G6aPO16ODn99u1A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 L 2.3T 自动两驱豪华版",
                "guidePrice": "14.98万",
                "price": 14.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/4B551C41-6679-44D8-95A9-52F9D1DBF891"
              },
              {
                "id": "DMCQHeK5FXqedcmih6Nq60A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 2.3T 手动四驱尊享版",
                "guidePrice": "15.98万",
                "price": 15.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/0318BD47-19A0-4FE3-8124-7837986C6910"
              },
              {
                "id": "aJQBEFDYFz6EP8ivbas8J3A11",
                "brand": "北京汽车",
                "model": "2017款BJ40 L 2.3T 自动环塔冠军版",
                "guidePrice": "17.98万",
                "price": 17.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/A26459DF-71F1-47E7-8FF1-824F482FBE8B"
              },
              {
                "id": "eRqNEBrgHOWWsYeza_7zb1A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 2.3T 自动两驱尊贵版",
                "guidePrice": "15.98万",
                "price": 15.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/A7421B7F-C2EF-4DD5-947A-FCA2469B806C"
              },
              {
                "id": "VjmVF2uiFaeGIqYMfCvY92A11",
                "brand": "北京汽车",
                "model": "2018款BJ40 PLUS 2.0T 手动四驱尊贵版",
                "guidePrice": "15.98万",
                "price": 15.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/0DAC78ED-8653-4CA8-81CB-41022DE4BD0D"
              },
              {
                "id": "ddW6pB05HHC4eLg7AKopT2A11",
                "brand": "北京汽车",
                "model": "2017款北京BJ80 2.8TDi 手动四驱五门豪华版",
                "guidePrice": "28.80万",
                "price": 28.8,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/29A25FDA-E035-4867-A19F-C6A775FBD07D"
              },
              {
                "id": "R49LPQ4xFgyKcINZC10W71A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 L 2.0T 手动两驱豪华版",
                "guidePrice": "12.98万",
                "price": 12.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B2976308-5DF1-4E6B-B095-537B592E461E"
              },
              {
                "id": "LEI4mXD9HLmidX7CvcNPE1A11",
                "brand": "北京汽车",
                "model": "2018款BJ40 PLUS 2.3T 自动四驱旗舰版",
                "guidePrice": "18.98万",
                "price": 18.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/C1941A37-25A2-467C-9ED9-7F4FAB2754CA"
              },
              {
                "id": "PkaoWfuUEEyVfEqQoT_uE0A11",
                "brand": "北京汽车",
                "model": "2017款BJ40 L 2.3T 手动环塔冠军版",
                "guidePrice": "16.98万",
                "price": 16.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/6616B325-F778-4BA0-81EE-7839326AA788"
              },
              {
                "id": "j4z_Gt7NGy_HZDq9DnrMP1A11",
                "brand": "北京汽车",
                "model": "2018款北京BJ20 1.5T CVT尊贵型",
                "guidePrice": "13.98万",
                "price": 13.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/BD0D50B7-9DC6-40B1-86B0-07028CCA0F46"
              },
              {
                "id": "UvI_MC4UHQWGvHto7GHYT0A11",
                "brand": "北京汽车",
                "model": "2017款北京BJ80 2.3T 自动建军90周年纪念版",
                "guidePrice": "31.80万",
                "price": 31.8,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/B6473D21-DC31-486A-8FE6-166FED2668E2"
              },
              {
                "id": "cwz82yhwGYihJKi9W1h7X3A11",
                "brand": "北京汽车",
                "model": "2018款北京BJ20 1.5T 手动精英型",
                "guidePrice": "10.88万",
                "price": 10.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/AAD8EEC4-06F3-436A-9BEC-D7E5881725CB"
              },
              {
                "id": "nohvZ9xNH8K1pvZ9uOJwL1A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 2.0T 手动四驱尊贵版",
                "guidePrice": "14.98万",
                "price": 14.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/F6ABBFB4-202B-4434-A232-9F39C5B1CB83"
              },
              {
                "id": "BzV81T3LG2aPy4RRsSnTG1A11",
                "brand": "北京汽车",
                "model": "2018款BJ40 PLUS 2.3T 自动四驱尊享版",
                "guidePrice": "17.98万",
                "price": 17.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/794653C2-B650-4B73-8CE7-F1310341C167"
              },
              {
                "id": "ouNomH4BE6ywKJ8qwzPsi3A11",
                "brand": "北京汽车",
                "model": "2018款北京BJ20 1.5T CVT精英型",
                "guidePrice": "11.88万",
                "price": 11.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/93D7E3C3-2258-4E70-BD8A-ECFE87535DA5"
              },
              {
                "id": "IyiqYvnvFsKh4Qp96HB0U3A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 L 2.3T 自动四驱尊享版",
                "guidePrice": "16.98万",
                "price": 16.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/010F6088-6AFB-4C2D-B1BE-301377CA23AB"
              },
              {
                "id": "qjlSEtl3H7asHxiWH2x6A3A11",
                "brand": "北京汽车",
                "model": "2018款北京BJ20 1.5T 手动豪华型",
                "guidePrice": "11.88万",
                "price": 11.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/0335330D-AC73-454F-8ED7-B3CF6469663C"
              },
              {
                "id": "TNlBtUa6EqiNclKyD6KyJ1A11",
                "brand": "北京汽车",
                "model": "2017款北京BJ80 2.8TDi 手动四驱三门豪华版",
                "guidePrice": "28.30万",
                "price": 28.3,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/C9D55231-3B20-42FE-88B0-C12FBA80CCBE"
              },
              {
                "id": "MRQhdsPME8KgtiAoL_ww90A11",
                "brand": "北京汽车",
                "model": "2016款BJ40 2.3T 自动四驱尊享版",
                "guidePrice": "16.98万",
                "price": 16.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/6B848C95-6CC6-4836-809B-3BD11EB6389B"
              },
              {
                "id": "nwY_DvpzFqmNU9pcUF3vx3A11",
                "brand": "北京汽车",
                "model": "2018款北京BJ20 1.5T CVT豪华型",
                "guidePrice": "12.98万",
                "price": 12.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/994D345A-DBBA-4ED9-8475-642DD4F27DD0"
              },
              {
                "id": "rvSLkZLxEkK5fm5nA8NKH3A11",
                "brand": "北京汽车",
                "model": "2016款北京BJ80 2.3T 手动四驱尊贵版",
                "guidePrice": "28.80万",
                "price": 28.8,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/415A0C30-930A-4368-A8A3-AEF79DD9E92A"
              },
              {
                "id": "p5mPyaaTH1yOYF86ux6Oe3A11",
                "brand": "北京汽车",
                "model": "2016款北京BJ80 2.3T 自动四驱尊贵版",
                "guidePrice": "29.80万",
                "price": 29.8,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/1120D74F-7FA4-46E6-8AC2-54183C2F6ABB"
              },
              {
                "id": "O1yhz9KBF8O5uAycFwP2s0A11",
                "brand": "北京汽车",
                "model": "2013款E系列两厢 1.3L 手动乐天天窗版(停产)",
                "guidePrice": "6.18万",
                "price": 6.18,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/4108AA70-390D-40F8-9959-99C85CE0B0FA"
              },
              {
                "id": "V2c0cB_7FimUPtZpfmc2m1A11",
                "brand": "北京汽车",
                "model": "2018款北京BJ80 2.3T 自动珠峰版",
                "guidePrice": "39.80万",
                "price": 39.8,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/AF2FBE84-FF2B-407C-B9D8-EC7CF9152461"
              },
              {
                "id": "dqFqq7GAELSYn7vJieVSu3A11",
                "brand": "北京汽车",
                "model": "2013款E系列两厢 1.5L 手动乐天天窗版(停产)",
                "guidePrice": "6.48万",
                "price": 6.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/D5CF454B-3EE1-47AC-A310-89D8815B5640"
              },
              {
                "id": "RFbOtJDxHh6boCk4vZnOx1A11",
                "brand": "北京汽车",
                "model": "2013款E系列三厢 1.3L 手动乐活版(停产)",
                "guidePrice": "5.48万",
                "price": 5.48,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/13DD3C32-FE7F-4ACF-BAF0-025392E122A2"
              },
              {
                "id": "QuBPGhGUEy_Q5cbTyhoI10A11",
                "brand": "北京汽车",
                "model": "2018款北京BJ20 1.5T 手动舒适型",
                "guidePrice": "9.68万",
                "price": 9.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/BCE9F808-4622-41E2-8614-D0034A03AB71"
              },
              {
                "id": "LSZQmclFGBmXGIs8XnunT0A11",
                "brand": "北京汽车",
                "model": "2013款E系列两厢 1.3L 手动乐天版(停产)",
                "guidePrice": "5.88万",
                "price": 5.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/3C14D1C3-C002-4BA9-BB50-73C7BFB23991"
              },
              {
                "id": "URA2aMhkEKy56I613tXj62A11",
                "brand": "北京汽车",
                "model": "2013款E系列三厢 1.3L 手动乐天天窗版(停产)",
                "guidePrice": "6.28万",
                "price": 6.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/00ACB601-BA37-43D9-83D1-B3AEBE9949D8"
              },
              {
                "id": "aPzRaWcYEYqG52s7qLHEn1A11",
                "brand": "北京汽车",
                "model": "2013款E系列两厢 1.5L 手动乐天版(停产)",
                "guidePrice": "6.18万",
                "price": 6.18,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/D1281F21-6DFC-4CA6-8D99-75A2903F11F9"
              },
              {
                "id": "EUE6MNtZGRq_em_j0jQAy2A11",
                "brand": "北京汽车",
                "model": "2013款E系列三厢 1.5L 手动乐天版(停产)",
                "guidePrice": "6.28万",
                "price": 6.28,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8C8BE087-92F3-4AD0-B847-81403D0E2D3B"
              },
              {
                "id": "HednhZQyEVKtyWpjVbQ8Q1A11",
                "brand": "北京汽车",
                "model": "2013款E系列两厢 1.5L 手动乐尚版(停产)",
                "guidePrice": "6.88万",
                "price": 6.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/30762AD3-F5B7-4EF1-977D-87EF5A67F7C8"
              },
              {
                "id": "I3Ciz3hNEJuPo0H6Ma7wB2A11",
                "brand": "北京汽车",
                "model": "2013款E系列三厢 1.3L 手动乐天版(停产)",
                "guidePrice": "5.98万",
                "price": 5.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/82E73FE5-D370-45A4-AA98-6B69770343E8"
              },
              {
                "id": "tJsNacKTFc2dRA10YhFQx1A11",
                "brand": "北京汽车",
                "model": "2013款E系列两厢 1.3L 手动乐尚版(停产)",
                "guidePrice": "6.51万",
                "price": 6.51,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/5638867D-49B7-4F59-B4AE-299B9AF1BAB2"
              },
              {
                "id": "j05sJSjmEyGg9Thvv9j5D3A11",
                "brand": "北京汽车",
                "model": "2013款E系列三厢 1.5L 手动乐天天窗版(停产)",
                "guidePrice": "6.58万",
                "price": 6.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8C296F60-9BF3-4716-A45C-A9B878CCADEF"
              },
              {
                "id": "ciA2s8HgFsiSsEB70w_b43A11",
                "brand": "北京汽车",
                "model": "2013款E系列三厢 1.5L 自动乐享版(停产)",
                "guidePrice": "8.78万",
                "price": 8.78,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/320872ED-6C56-46E3-88B2-C61C915B552B"
              },
              {
                "id": "zMHGcPFWG1yvTaPKwrXkX2A11",
                "brand": "北京汽车",
                "model": "2013款E系列三厢 1.3L 手动特惠版(停产)",
                "guidePrice": "4.58万",
                "price": 4.58,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/96D6FF25-705C-4758-BF9D-CA2A16F3993C"
              },
              {
                "id": "wOKeofqJFMOwLIDyjaggc0A11",
                "brand": "北京汽车",
                "model": "2013款E系列三厢 1.5L 自动乐尚版(停产)",
                "guidePrice": "7.61万",
                "price": 7.61,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/7E21D494-277A-4436-827E-644E358A3202"
              },
              {
                "id": "t3WmJrX6F1mf16ZHKnGIf3A11",
                "brand": "北京汽车",
                "model": "2013款E系列三厢 1.5L 手动乐尚版(停产)",
                "guidePrice": "6.98万",
                "price": 6.98,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/BD75B85F-169D-4417-95B8-DDE7F282057D"
              },
              {
                "id": "zBRWA1iaGdiYj8p2ucDOp2A11",
                "brand": "北京汽车",
                "model": "2018款BJ40 2.0T 手动尊贵版 柴油",
                "guidePrice": "15.99万",
                "price": 15.99,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/464A38DB-F706-4B39-BAF4-B972E16CB614"
              },
              {
                "id": "LoJATNxQEl_xYfnz_BoT50A11",
                "brand": "北京汽车",
                "model": "2013款E系列两厢 1.5L 自动乐尚版(停产)",
                "guidePrice": "7.51万",
                "price": 7.51,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/58229BD6-5213-4FF1-84FD-CF81EDF75456"
              },
              {
                "id": "zOZCJrPyFTqbYQglvrRgr0A11",
                "brand": "北京汽车",
                "model": "2013款E系列两厢 1.5L 自动乐享版(停产)",
                "guidePrice": "8.68万",
                "price": 8.68,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/8814D15C-16D0-4B46-BE78-4EC0ABDFA1FA"
              },
              {
                "id": "jS0jJcLcHtuVVfm8rlSYP3A11",
                "brand": "北京汽车",
                "model": "2013款E系列三厢 1.5L 自动乐天版(停产)",
                "guidePrice": "6.88万",
                "price": 6.88,
                "filename": "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/E43D6890-F284-4019-A470-ACDD48DEA5F6"
              }
            ]
          }
        },
        "errors": null,
        "dataPresent": true,
        "extensions": null
      
    }
    this.a=[];
  }
  
  get(){
    for(var i=0;i<this.state.data.CarInfoList.content.length;i++){
      fetch(this.state.data.CarInfoList.content[i].filename)
            .then((response) => {
              this.res=JSON.parse(response._bodyText);
              this.a.push(this.res[209]);
              console.log(this.a);
              //console.log(this.res[209])
            })
            .catch((error) => {
              console.log(error)
            })

            //console.log('INSERT INTO car (brand, model,guideprice,price,filename,url) VALUES ('+ "'"+this.state.data.CarInfoList.content[i].brand+ "'" + ','+ "'"+this.state.data.CarInfoList.content[i].model+ "'"+ ','+ "'"+this.state.data.CarInfoList.content[i].guidePrice+ "'"+ ','+ this.state.data.CarInfoList.content[i].price+ ',' + "'"+ this.state.data.CarInfoList.content[i].filename+ "'"+ ','+ "'" +a.value+ "'"+');')

    }
  }

  getw(){
    //console.log(this.a);

    for(var j=0;j<this.state.data.CarInfoList.content.length;j++){
      
      console.log('INSERT INTO car (brand, model,guideprice,price,filename,url) VALUES ('+ "'"+this.state.data.CarInfoList.content[j].brand+ "'" + ','+ "'"+this.state.data.CarInfoList.content[j].model+ "'"+ ','+ "'"+this.state.data.CarInfoList.content[j].guidePrice+ "'"+ ','+ this.state.data.CarInfoList.content[j].price+ ',' + "'"+ this.state.data.CarInfoList.content[j].filename+ "'"+ ','+ "'" +this.a[j].value+ "'"+');')

    }
  }

  



  render() {
    return (
      <View>
      <Button
                    style={{ fontSize: 20, color: 'white' }}
                    styleDisabled={{ color: 'red' }}
                    containerStyle={{ padding: 5, height: 40, width: 280, marginTop: 50, overflow: 'hidden', borderRadius: 12, backgroundColor: 'red' }}
                    onPress={() => this.getw()}>
                    点击2
                </Button>

                <Button
                    style={{ fontSize: 20, color: 'white' }}
                    styleDisabled={{ color: 'red' }}
                    containerStyle={{ padding: 5, height: 40, width: 280, marginTop: 50, overflow: 'hidden', borderRadius: 12, backgroundColor: 'red' }}
                    onPress={() => this.get()}>
                    点击1
                </Button>

        
      </View>
    );
  }
}
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
const axios = require('axios');
const prisma = new PrismaService();

@Injectable()
export class AppService {

  async test() {

    await axios.post('https://www.classicgrowndiamonds.com/API/action.php', {
      action:"diamond_stock_list",
      email:"info@dri.com.au",
      password:"1234567890",
      startindex:"0",
      shape:"ROUND",
      carat :"",
      color:"",
      clarity:"",
      cut:"",
      polish:"",
      symm:"",
      lab:"",
      loatno:"",
      certificate_no:"",
      diamond_width_from:"",
      diamond_width_to:"",
      diamond_length_from:"",
      diamond_length_to:"",
      table_from:"",
      table_to:"",
      total_depth_from:"",
      total_depth_to:"",
      depth_per_from:"",
      depth_per_to:"",
      pav_angle_from:"",
      pav_angle_to:"",
      pavilion_depth_from:"",
      pavilion_depth_to:"",
      crown_height_from:"",
      crown_height_to:"",
      crown_angle_from:"",
      crown_angle_to:"",
      key_symbols:"",
      heart_and_arrow:"",
      eye_clean:"",
      discount_from:"",
      discount_to:""
    })
    .then(function (response) {
      
      const arr = response.data.DATA;
      
      arr.forEach(async (diamond) => {
      await prisma.records.create({
        data:{
          row_id:diamond.ROW_ID,
          loat_no:diamond.LOAT_NO,
          shape: diamond.SHAPE,
          carat: diamond.CARAT,
          color: diamond.COLOR,
          clarity: diamond.CLARITY,
          cut: diamond.CUT,
          polish: diamond.POLISH,
          symm: diamond.SYMM,
          fluro: diamond.FLURO,
          country: diamond.COUNTRY,
          lab: diamond.LAB,
          certificate_no: diamond.CERTIFICATE_NO,
          certificate: diamond.CERTIFICATE,
          width: diamond.WIDTH,
          length: diamond.LENGTH,
          measurements: diamond.MEASUREMENTS,
          depth_per: diamond.DEPTH_PER,
          table_per: diamond.TABLE_PER,
          price_per_cts: diamond.PRICE_PER_CTS,
          rap: diamond.RAP,
          amount: diamond.AMOUNT,
          discount: diamond.DISCOUNT,
          cutlet: diamond.CUTLET,
          gridle: diamond.GRIDLE,
          image: diamond.IMAGE,
          black: diamond.BLACK,
          asset: diamond.ASSET,
          ideal: diamond.IDEAL,
          heart: diamond.HEART,
          arrow: diamond.ARROW,
          video: diamond.VIDEO,
          status: diamond.STATUS,
        }
      });

    })
    })
    .catch(function (error) {
      console.log(error);
    });

    return 'success';
  }

};

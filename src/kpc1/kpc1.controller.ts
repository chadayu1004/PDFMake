import { Controller, Get, Res } from '@nestjs/common';
import { Kpc1Service } from './kpc1.service';
@Controller('kpc1')
export class Kpc1Controller {
    constructor(private readonly Kpc1Service: Kpc1Service) { }

    @Get('generate')
    async generatePDF(@Res() res) {
        const Text = {

            bold: true,
        };
        const content = [

            { text: 'ใบแจ้งค่าไฟฟ้า', alignment: 'center', fontSize: 18 },
            {
                alignment: 'justify',
                columns: [
                    {
                        styles: 'tableExample',
                        table: {
                            widths: ['*', '*', '*', '*', '*', '*', '*', '30%', '20%'],
                            heights: [5, 5, 5, 5],




                            body: [

                                // border: [false, false, false, false],
                                // fillColor: '#ffffff',
                                [
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'หมายเลขผู้ใช้ไฟ:',
                                        alignment: 'right',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },

                                ],
                                [
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'เลขที่ใบแจ้งค่าไฟฟ้า:',
                                        alignment: 'right',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'จำนวนเงิน:',
                                        alignment: 'right',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'วันที่ครบกำหนดค่าไฟฟ้าเดือนปัจจุบัน:',
                                        alignment: 'right',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],

                            ],
                        },
                    },
                ]
            },

            {
                text: 'การไฟฟ้าส่วนภูมิภาค ขอแจ้งค่าไฟฟ้าประจำเดือน กันยายน 2566 ตามรายละเอียดดังนี้',
                fontSize: 11
            },

            {
                alignment: 'justify',
                margin: 2,
                columns: [
                    {
                        styles: 'tableExample',
                        table: {
                            widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
                            heights: [10, 10],
                            body: [
                                [
                                    {
                                        text: 'รหัสการไฟฟ้า',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'สายจดหน่วย',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'รหัสเครื่องวัด',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'ประเภทอัตรา',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'วันที่อ่านหน่วย',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'แรงดัน',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'ตัวคูณ',
                                        alignment: 'center',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },

                                ],
                                [
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                            ],
                        },
                    },
                ]
            },
            {
                alignment: 'justify',
                margin: 2,
                columns: [
                    {
                        styles: 'tableExample',
                        table: {
                            widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
                            heights: [10, 10, 10, 10, 10, 10, 10, 10, 10],
                            body: [
                                [
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'เลขอ่านครั้งหลัง',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'เลขอ่านครั้งก่อน',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'จำนวนหน่วยที่ใช้',
                                        alignment: 'center',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'รายละเอียดค่าไฟฟ้าฐาน',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'จำนวนหน่วย',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'ราคา/หน่วย',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'จำนวนเงิน',
                                        alignment: 'center',
                                    },

                                ],
                                [
                                    {
                                        text: 'กำลังไฟฟ้าสูงสุด P',
                                        alignment: 'right',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'Peak (KW)',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                ],
                                [
                                    {
                                        text: '(กิโลวัตต์) OP',
                                        alignment: 'right',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'Off Peak (Kw)',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                ],
                                [
                                    {
                                        text: 'H',
                                        alignment: 'right',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'Peak (Kwh)',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                ],
                                [
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'Off Peak (Kwh)',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                ],
                                [
                                    {
                                        text: 'พลังงานไฟฟ้า P',
                                        alignment: 'right',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'ค่าบริการรายเดือน',
                                        colSpan: 3,
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                ],
                                [
                                    {
                                        text: '(หน่วย) OP',
                                        alignment: 'right',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'รวมเงินค่าไฟฟ้าฐาน',
                                        colSpan: 3,
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                ],
                                [
                                    {
                                        text: 'H',
                                        alignment: 'right',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: 'รวม',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        colSpan: 2,

                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'ประวัติการใช้ไฟ',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: 'กิโลวาร์',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'จำนวนเงิน',
                                        alignment: 'right',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: 'เงินค่าไฟฟ้าฐาน',
                                        alignment: 'right',
                                        colSpan: 3,
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: 'ค่า Ft พ.ค.66- ส.ค.66 = 0.0110 บาท/หน่วย',
                                        alignment: 'right',
                                        colSpan: 3,
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: 'ส่วนลด',
                                        alignment: 'right',
                                        colSpan: 3,
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'ค่าไฟ',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'ผลิต',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'ส่ง',
                                        alignment: 'center',
                                    },
                                    {
                                        text: 'รวม',
                                        alignment: 'center',
                                    },
                                ],
                                [
                                    {
                                        text: 'รวมเงินค่าไฟฟ้า',
                                        alignment: 'right',
                                        colSpan: 3,
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'On Peak',
                                        alignment: 'center',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                ],
                                [
                                    {
                                        text: 'ภาษีมูลค่าเพิ่ม',
                                        alignment: 'right',
                                        colSpan: 3,
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'Off Peak ',
                                        alignment: 'center',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                ],
                                [
                                    {
                                        text: 'รวมเงินค่าไฟฟ้าเดือนปัจจุบัน',
                                        alignment: 'right',
                                        colSpan: 3,
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: 'รวมเงินทั้งสิ้น',
                                        alignment: 'right',
                                        colSpan: 3
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],
                                [
                                    {
                                        text: 'รวมเงินทั้งสิ้น',
                                        alignment: 'right',
                                        colSpan: 3
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],

                            ],
                        },
                    },
                ]
            },
            {
                alignment: 'justify',
                margin: 5,
                columns: [
                    {
                        styles: 'tableExample',
                        table: {
                            widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
                            heights: [5, 5, 5, 5],

                            body: [
                                [
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'Baht/Kwh (Not vat)',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: 'B/Kwh',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                    {
                                        text: '',
                                        border: [false, false, false, false]
                                    },
                                ],

                            ]
                        }
                    }
                ]
            },

        ]



        const pdfBuffer = await this.Kpc1Service.generateA4PDF(content);

        const pdfBase64 = pdfBuffer.toString('base64');

        res.status(200).send(`
            <!DOCTYPE html>
            <html>
                <body>
                    <iframe
                        width="100%"
                        height="900px"
                        src="data:application/pdf;base64,${pdfBase64}"
                    ></iframe>
                </body>
            </html>
        `);
    }
}


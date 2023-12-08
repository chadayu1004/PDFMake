import { Injectable } from '@nestjs/common';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable()
export class Kpc1Service {
    constructor() {
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        
        pdfMake.fonts = {
            THSarabunNew: {
              normal: 'THSarabunNew.ttf',
              bold: 'THSarabunNew-Bold.ttf',
              italics: 'THSarabunNew-Italic.ttf',
              bolditalics: 'THSarabunNew-BoldItalic.ttf'
            },
            Roboto: {
              normal: 'Roboto-Regular.ttf',
              bold: 'Roboto-Medium.ttf',
              italics: 'Roboto-Italic.ttf',
              bolditalics: 'Roboto-MediumItalic.ttf'
            }
          }

        
    }



    generateA4PDF(content: any): Promise<Buffer> {
        return new Promise<Buffer>((resolve, reject) => {
            const pdfDefinition = {
                pageSize: 'A3',
                pageOrientation: 'portrait', //แนวตั้ง
                // pageOrientation: 'landscape', // กำหนดเป็นแนวนอน
                content: content, // รับข้อมูลที่ต้องการใส่ลงใน PDF จากภายนอก
                styles: {
                    tableExample: {
                      fontSize: 11,
                      alignment: 'center',
                    },
                    tableExample2: {
                      fontSize: 11,
                      alignment: 'center',
                    },
                    subTableStyle: {
                      alignment: 'center',
                      bold: true,
                      fontSize: 11,
                    },
                    subTableStyle2: {
                      alignment: 'center',
                      bold: true,
                      fontSize: 11,
                    },
                    subTableDataStyle: {
                      alignment: 'center',
                    },
                  },
                  defaultStyle: {
                    font: 'THSarabunNew', // ระบุแบบอักษรเริ่มต้น
                  },
            };

            const pdfDoc = pdfMake.createPdf(pdfDefinition);

            pdfDoc.getBuffer((buffer) => {
                resolve(buffer);
            });
        });
    }
}

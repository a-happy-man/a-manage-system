// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位 折线图数据
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '小米',
            value: 2999
          },
          {
            name: '苹果',
            value: 5999
          },
          {
            name: 'vivo',
            value: 1500
          },
          {
            name: 'oppo',
            value: 1999
          },
          {
            name: '魅族',
            value: 2200
          },
          {
            name: '三星',
            value: 4500
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 500
          },
          {
            date: '周三',
            new: 12,
            active: 550
          },
          {
            date: '周四',
            new: 60,
            active: 800
          },
          {
            date: '周五',
            new: 65,
            active: 550
          },
          {
            date: '周六',
            new: 53,
            active: 770
          },
          {
            date: '周日',
            new: 33,
            active: 170
          }
        ],
        // 折线图
        orderData: {
          date: ['20220922', '20220923', '20220924', '20220925', '20220926', '20220927', '20220928'],
          data: List
        },
        tableData: [
          {
            name: 'oppo',
            todayBuy: 600,
            monthBuy: 4500,
            totalBuy: 22000
          },
          {
            name: 'vivo',
            todayBuy: 600,
            monthBuy: 2800,
            totalBuy: 25000
          },
          {
            name: '苹果',
            todayBuy: 900,
            monthBuy: 5500,
            totalBuy: 45000
          },
          {
            name: '小米',
            todayBuy: 1200,
            monthBuy: 7500,
            totalBuy: 55000
          },
          {
            name: '三星',
            todayBuy: 200,
            monthBuy: 1000,
            totalBuy: 30009
          },
          {
            name: '魅族',
            todayBuy: 250,
            monthBuy: 2000,
            totalBuy: 21000
          }
        ]
      }
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PickViewServices {
  constructor() { }
  nonmalData: any[] = [
    { data: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"] },
  ];
  nogangedData: any[] = [
    {
      data: [
        { id: "1", value: "附近" },
        { id: "2", value: "上城区" },
        { id: "3", value: "下城区" },
        { id: "4", value: "江干区" },
        { id: "5", value: "拱墅区" },
        { id: "6", value: "西湖区" },
      ],
    },
    {
      data: [
        { id: "1", value: "1000米" },
        { id: "2", value: "2000米" },
        { id: "3", value: "3000米" },
        { id: "4", value: "5000米" },
        { id: "5", value: "10000米" },
      ],
    },
  ];
  gangedData: any[] = [{
    data: [
      {
        id: "1",
        value: "附近",
        childs: [
          {
            id: "1",
            value: "1000米",
            childs: [{
              id: "1",
              value: "1"
            }, {
              id: "2",
              value: "2"
            },]
          },
          {
            id: "2",
            value: "2000米"
          },
          {
            id: "3",
            value: "3000米"
          },
          {
            id: "4",
            value: "5000米"
          },
          {
            id: "5",
            value: "10000米"
          }
        ]
      },
      {
        id: "2",
        value: "上城区"
      },
      {
        id: "3",
        value: "下城区"
      },
      {
        id: "4",
        value: "江干区"
      },
      {
        id: "5",
        value: "拱墅区"
      },
      {
        id: "6",
        value: "西湖区"
      }
    ]
  }];

}

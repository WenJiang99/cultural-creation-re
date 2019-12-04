import { INodeType } from "@/interfaces/map";

export const NODE_LIST: INodeType[] = [
  {
    x: 1009,
    y: 603,
    name: "瑞金"
  },
  {
    x: 947,
    y: 627,
    name: "赣县",
    roadPoints: [
      {
        x: 998,
        y: 610
      },
      {
        x: 991,
        y: 614
      },
      {
        x: 987,
        y: 620
      },
      {
        x: 964,
        y: 634
      },
      {
        x: 956,
        y: 632
      }
    ],
    roadFlagPoint: [
      {
        startPoint: {
          x: 1009,
          y: 603,
        },
        endPoint: {
          x: 980,
          y: 628
        }
      },
      {
        startPoint: {
          x: 980,
          y: 628
        },
        endPoint: {
          x: 963,
          y: 633
        },
      },
      {
        startPoint: {
          x: 963,
          y: 633
        },
        endPoint: {
          x: 947,
          y: 627,
        },
      }
    ]
  },
  {
    x: 905,
    y: 628,
    name: "汝城"
  },
  {
    x: 857,
    y: 632,
    name: "彬县"
  },
  {
    x: 780,
    y: 625,
    name: "兴安"
  },
  {
    x: 707,
    y: 591,
    name: "通道芙蓉镇"
  },
  {
    x: 666,
    y: 576,
    name: "黎平"
  },
]
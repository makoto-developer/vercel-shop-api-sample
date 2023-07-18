import {NextApiResponse, NextApiRequest} from 'next'
import {Shop} from "@/interface/shop";

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    const shopList: Shop[] = [
        {
            id: "1",
            name: "東京営業所",
            openingHours: "11:00-21:00",
        }, {
            id: "2",
            name: "大阪営業所",
            openingHours: "10:00-20:00",
        }, {
            id: "3",
            name: "福岡営業所",
            openingHours: "10:00-21:00",
        }, {
            id: "4",
            name: "沖縄営業所",
            openingHours: "9:30-17:00",
        }, {
            id: "5",
            name: "北海道営業所",
            openingHours: "10:00-16:00",
        },
    ]
    return res
        .status(200)
        .appendHeader("message", "vercel_api")
        .json(shopList)
}
import {NextApiResponse, NextApiRequest} from 'next'
import {Shop} from "@/interface/shop";
import {shop_list} from "@/pages/api/v1/shop/sample_data";

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    const shopList: Shop[] = shop_list
    return res
        .status(200)
        .appendHeader("message", "vercel_api")
        .json(shopList)
}
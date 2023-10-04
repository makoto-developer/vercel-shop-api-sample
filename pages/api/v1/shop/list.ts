import {NextApiResponse, NextApiRequest} from 'next'
import {shop_list} from "@/pages/api/v1/shop/sample_data";

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    return res
        .status(200)
        .appendHeader("message", "vercel_api")
        .json(shop_list)
}
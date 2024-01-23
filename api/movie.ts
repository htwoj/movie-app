// vercel에서 제공하는 serverless functions
// 서버코드
import fetch from 'node-fetch'
import {VercelRequest, VercelResponse} from '@vercel/node'

// .env 파일 내부 환경변수 설정
const {APIKEY} = process.env

export default async function handler(request:VercelRequest, response:VercelResponse) {
    const {title, page, id} = JSON.parse(request.body)
    const url = id
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full` 
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`
    const res = await fetch(url)
    const json = await res.json()
    response
    .status(200)
    .json(json)
}
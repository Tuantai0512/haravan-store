import Link from "next/link";
import style from './style.module.scss'
import Image from "next/image";
import mayIn from "../../../public/img/may-in.webp"

export interface ILatestBlogProps {
}

export function LatestBlog(props: ILatestBlogProps) {

    const BlogLatest = [
        {
            image: '',
            title: 'Hướng dẫn cài đặt Máy in mã vạch HPRT SL41',
            date: '18/05/2023'
        },
        {
            image: '',
            title: 'Hướng dẫn cài đặt Máy in mã vạch HPRT SL41',
            date: '18/05/2023'
        },{
            image: '',
            title: 'Hướng dẫn cài đặt Máy in mã vạch HPRT SL41',
            date: '18/05/2023'
        },{
            image: '',
            title: 'Hướng dẫn cài đặt Máy in mã vạch HPRT SL41',
            date: '18/05/2023'
        },{
            image: '',
            title: 'Hướng dẫn cài đặt Máy in mã vạch HPRT SL41',
            date: '18/05/2023'
        },{
            image: '',
            title: 'Hướng dẫn cài đặt Máy in mã vạch HPRT SL41',
            date: '18/05/2023'
        },{
            image: '',
            title: 'Hướng dẫn cài đặt Máy in mã vạch HPRT SL41',
            date: '18/05/2023'
        },{
            image: '',
            title: 'Hướng dẫn cài đặt Máy in mã vạch HPRT SL41',
            date: '18/05/2023'
        },{
            image: '',
            title: 'Hướng dẫn cài đặt Máy in mã vạch HPRT SL41',
            date: '18/05/2023'
        }
    ]

    return (
        <div className={style['wrapper-latestBlog']}>
            <h2 className={style['hTitle']}>
                <Link href={'#'}>Có thể bạn muốn biết?</Link>
            </h2>
            <div className="lg:grid grid-cols-3 gap-4 py-4">
                {BlogLatest.map((items, index) => {
                    return (
                        <div className="flex gap-x-4 items-center mb-2" key={index}>
                            <div>
                                <Link href={'#'} className="block w-max">
                                    <Image src={mayIn} alt="may-in" />
                                </Link>
                            </div>
                            <div>
                                <h3 className={style['title']}>
                                    <Link href={'#'}>{items.title}</Link>
                                </h3>
                                <div className={style['date']}>
                                    <span>{items.date}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={style['link']}>
                <Link href={'#'}>Xem các tin bài khác »</Link>
            </div>
        </div>
    );
}

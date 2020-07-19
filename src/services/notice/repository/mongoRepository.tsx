
interface Notice {
    id: number
    userId: number
    title: string
    completed: boolean
  }

interface NoticeData {
    notice : {
        [key: string]: Notice
    }
}

  
interface NoticeRepo {
    find (): Promise<NoticeData[]> 
}

class NoticeMongoRepository implements NoticeRepo {
    find(): Promise<Notice[]> {
        return [];
    }
}

export default NoticeMongoRepository;
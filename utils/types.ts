interface ServiceUi {
    title: string,
    icon: JSX.Element,
    des: string
}

interface Statement {
    type: string
    status: string
    prize: number
    date: Date
    id: number
}

interface Plan {
    id: number
    title: string
    desc: string
    prize: number,
    type: string,
    color: string
    status: string
    createdAt: Date
    dueAt: Date
    benefits: Benefit[]
    statements: Statement[]
}

interface PaymentMethod {
    id: string
    card: string
    cvv: string
    exp: string,
    lastTransaction: Date
    type: string
    name: string
}

type Benefit = {
    id: number
    name: string
}
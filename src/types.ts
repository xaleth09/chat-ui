export type UserId = string;

export type User = {
    id: UserId
    user_name: string,
    first_name: string,
    last_name: string,
    avatar_url: string,
}

export type MessageReactionType = 'LIKE' | 'LOVE' | 'SAD' | 'SUPPORT' | 'DISLIKE'

export type MessageReaction = {
    type: MessageReactionType,
    count: number,
    user_ids: UserId[],
}

export type MessageId = string;

export type Message = {
    id: MessageId,
    sender_user_id: UserId,
    content: string,
    date_sent: string,
    date_deleted: string | null,
    date_read: string | null,
    reactions: MessageReaction[]
}

export type ChatGroupId = string

export type ChatGroup = {
    id: ChatGroupId,
    name: string | null,
    date_last_message_received: string | null,
    date_created: string,
    user_ids: UserId[],
    message_ids: MessageId[],
    date_deleted: string | null,
    last_message_content: string,
    last_message_user_id: UserId,
}




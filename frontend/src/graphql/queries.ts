import { gql } from "../__generated__"

export const ALL_ANNOUNCEMENT_QUERY = gql(`
    query Query {
        AllAnnouncements {
            id
            title
            date
            content
        }
    }
`);


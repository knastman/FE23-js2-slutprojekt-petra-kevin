import { threadType2 } from "../../types/typesv2/threadType2";
import { UserType2 } from "../../types/typesv2/userType2";


export function threadTemplate(thread: threadType2, user: UserType2): string {
    return `
    <div class="thread">
            <a href="/threads/${thread.id}" data-navigo>${thread.title}</a>
    </div>
    `;
}
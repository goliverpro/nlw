import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import {classToPlain} from "class-transformer";

class ListTagsService {

    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories)

        const tags = await tagsRepositories.find();
        //uma possibilidade de override para customizar alguma informação na classe
        //tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}`}))
        
        return classToPlain(tags);
    }
}

export {ListTagsService};
import React, { FC } from "react"
import ArrowFilterBlog from "../../components/Icons/ArrowFilterBlog";
import ArrowIco from "../../components/Icons/ArrowIco";
import Clip from "../../components/Icons/Clip";
import FilmIco from "../../components/Icons/FilmIco";
import ImageIco from "../../components/Icons/ImageIco";
import NewPost from "../../components/NewPost/NewPost";
import { ButtonAppruve, HrBlog, IconsBlog, IcoWrapper, InputBlock, InputBlogWrapper, NewPostWrapper, TitleBlog } from "../../components/NewPost/NewPost.styled";
import { ArrowFilterBlogWrapper, BlogFilter, BlogFilterDescription, BlogWrapper } from "./Blog.styled";

const Blog: FC = () => {
    return (
        <BlogWrapper>
            <NewPost/>
            <BlogFilter>
                <BlogFilterDescription>
                    Sort by: trending
                    <ArrowFilterBlogWrapper>
                        <ArrowFilterBlog/>
                    </ArrowFilterBlogWrapper>
                </BlogFilterDescription>
            </BlogFilter>
        </BlogWrapper>
    )
}
export default Blog;
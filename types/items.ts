import type { ConcreteComponent } from 'vue';

export interface ArticleItem {
    id: string
    createdAt: string
    title: string
    preview: string
    image: string
    description: string
}

export interface PageItem {
    number: number[]
    data: ArticleItem[][]
}

export interface RouteItem {
    path: string
    name: string
    component: ConcreteComponent | string
  }
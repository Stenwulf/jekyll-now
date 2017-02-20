---
layout: post
title: Adding a Sidebar Using HTML & SCSS
date: 2017-02-20 14:00:00 +/-0500
categories: html css scss sass jekyll
---
<br />

Today I did some experimentation with the stylesheet and default index page to add a side bar to the page. Currently the side bar contains an index of posts and the date they were published. In the future I would like to add more to the sidebar like post category folders and a post search option. I also did some formatting and changed the spacing of the masthead. THe masthead is the visual element usually refered to as the header. In HTML the header contains information about the page, the masthead in this case is the avatar image and nav-bar. Checkout this link on w3.org: [HTML structural elements](https://www.w3.org/wiki/HTML_structural_elements)

<br />

To add my sidebar I had to combine several new elements in 'style.scss' which are shown below. I followed the model used in the template and created a wrapper and a container element. The wrapper sets the margins from the right and top of the page and the maximum width. The sidebar element is the container that holds the title and list of posts. The sidebar container also sets the distance of the grey separation line from the left edge of the list. The sidebar title element is used to set the style and size of the title text.

<br />
{% highlight scss %}
.wrapper-sidebar {
  margin-right: 25px;
  max-width: 350px;
  float: right;
  margin-top: 1px;
}

.sidebar {

  padding-left: 25px;
  border-left: 1px solid $lightGray;
  width: 100%;

}

.sidebar-title {
  color: $darkGray;
  cursor: pointer;
  font-family: $helveticaNeue;
  font-weight: 300;
  font-size: 28px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid $lightGray;
}
{% endhighlight %}

<br />
In the default layout HTML file the sidebar is placed inside the wrapper element. Inside the sidebar the title and post list can be created. Using liquid tags the site posts can be iterated through and generated using an unordered list.
<br />

{% highlight html %}

{% raw %}

<div class="wrapper-sidebar">
  <div class="sidebar">

    <h1 class="sidebar-title"> Post Index </h1>

    <ul>
        {% for post in site.posts %}
          <li>
            <a href="{{ post.url }}"> {{ post.date | date: "%B %e, %Y" }} | {{ post.title }}  </a>
          </li>
        {% endfor %}
    </ul>

  </div>
</div>

{% endraw %}

{% endhighlight %}

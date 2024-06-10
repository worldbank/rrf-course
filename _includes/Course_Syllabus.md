<!-- <div class="syllabus">
         <div class="LiveSession">
         <a href="{{ site.baseurl }}/Opening/index.html">
            <img src="{{ site.baseurl }}/img/opening.png">
           <b> OPENING SESSION </b><br/></a>
        </div>
</div> -->
<div class="module_container">
        {% for module in site.data.course.modules%}
        {% assign agenda =site.data.course.agenda[module]%}
        {% assign first_post = site.categories[module]|reverse|first %}

        <div class="module">
            
            <!-- <a href="{{ site.baseurl }}{{ first_post.url }}">
            </a> -->
            <div class = "description">
                <a href="{{ site.baseurl }}{{ first_post.url }}index.html">
                    <img src="{{ site.baseurl }}/{{agenda.img}}" alt="{{agenda.title}}">
                    <div class="module_title">
                    {% if module contains "module" %}
                    <b>Module {{agenda.index}}</b> <br/><b>{{agenda.title}} </b><br/>
                    {% else %}
                    <b>(OPTIONAL)</b> <br/><b>{{agenda.title}} </b><br/> 
                    {% endif %}
                    </div>
                </a>
                <ul class="square">
                    {% for sub_module in agenda.sub_modules %}
                        {% assign post = site.categories[module][forloop.rindex0 ] %}
                            <a href="{{ site.baseurl }}{{ post.url }}index.html">
                                <li>{{sub_module[0]}} </li>
                            </a>
                    {% endfor %}
                </ul>
            </div>
        </div>
        {% endfor %}
</div>
<!-- <div class="syllabus">
        <div class="LiveSession">     
            <a href="{{ site.baseurl }}/Closing/index.html">
            <img src="{{ site.baseurl }}/img/closing.png">
                <b> CLOSING SESSION </b><br/>
                </a>
        </div>
</div> -->
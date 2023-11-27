<div>
    <h4>{{sub_module}} </h4>

<iframe src="{{site.data.course.agenda[module].sub_modules[sub_module].youtube}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="supplementary">
        <a href="{{site.data.course.agenda[module].sub_modules[sub_module].slide}}" target="_blank"> Slide</a> <br />
        {% if {{site.data.course.agenda[module].sub_modules[sub_module].reading}} %}
            <a href="{{site.data.course.agenda[module].sub_modules[sub_module].reading}}" target="_blank"> Learn More</a>
        {% endif %}
    </div>
</div>
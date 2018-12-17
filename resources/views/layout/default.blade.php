<!DOCTYPE html>
<html>
@include('partials.head')
<body class="{{ $bodyClasses ?? '' }}">
    <div class="intro">
        <h1>Taro</h1>
        <nav>
            <ul>
                @foreach($menu_items as $item)
                    <li><a href="{{ $item->url }}">{{ $item->name }}</a></li>
                @endforeach
            </ul>
        </nav>
    </div>
    @include('partials.footer')
</body>
</html>
